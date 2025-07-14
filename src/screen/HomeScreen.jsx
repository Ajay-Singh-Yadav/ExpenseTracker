import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHomeScreenStyle from '../hooks/useHomeScreenStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardSection from '../components/CardSection';
import RecentTransactions from '../components/RecentTransactions';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const styles = useHomeScreenStyle();

  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

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

      <CardSection />

      {/* Transaction Section */}

      <Text style={styles.transactionText}>Recent Transaction</Text>

      {/* Recent Transactions */}
      <RecentTransactions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
