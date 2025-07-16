import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHomeScreenStyle from '../hooks/useHomeScreenStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CardSection from '../components/CardSection';
import RecentTransactions from '../components/RecentTransactions';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CategoryDropdown from '../components/CategoryDropdown';

// Apollo
import { useQuery } from '@apollo/client';
import { GET_TRANSACTIONS } from '../Graphql/queries/queries';

const HomeScreen = () => {
  const styles = useHomeScreenStyle();
  const navigation = useNavigation();
  const { loading, error, data, refetch } = useQuery(GET_TRANSACTIONS);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error.message}</Text>;

  if (loading || !data) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: 'red' }}>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }
  const transactions = data.transactions;

  const income = transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text>Welcome</Text>
          <Text style={styles.nameText}>Ajay</Text>
        </View>

        <View style={styles.rightHeader}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddTransaction')}
          >
            <Ionicons name={'add'} size={20} color="#fff" />
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={handleProfile}>
            <Ionicons name="settings-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card Section */}

      <CardSection income={income} expense={expense} balance={balance} />

      {/* Transaction Section */}

      <View style={styles.transactionContainer}>
        <Text style={styles.transactionText}>Recent Transaction</Text>
        <View style={{ zIndex: 1000 }}>
          <CategoryDropdown />
        </View>
      </View>

      {/* Recent Transactions */}
      <RecentTransactions transactions={data.transactions} />
    </SafeAreaView>
  );
};

export default HomeScreen;
