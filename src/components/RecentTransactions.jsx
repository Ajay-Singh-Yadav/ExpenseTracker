import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useRecentTxtStyle from '../hooks/useRecentTxtStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const RecentTransactions = () => {
  const styles = useRecentTxtStyle();

  const transactions = useSelector(state => state.transaction.transactions);
  const sortedTransactions = [...transactions].sort(
    (a, b) => b.timestamp - a.timestamp,
  );

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.LeftView}>
        <Image
          source={require('../assets/icons/wages.png')}
          style={styles.image}
        />
        <View style={styles.slaryView}>
          <Text style={styles.salaryText}>Salary</Text>
          <Text style={styles.datetext}>{item.type}</Text>
        </View>
      </View>

      <View style={styles.rightView}>
        <View>
          <Text
            style={[
              styles.amoutText,
              { color: item.type === 'Income' ? '#2ECC71' : '#E74C3C' },
            ]}
          >
            {item.type === 'Income' ? '+ ' : '- '}₹{item.amount.toFixed(2)}
          </Text>
          <Text style={styles.datetext}>
            {' '}
            {new Date(item.timestamp).toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.deleteIcon}>
          <TouchableOpacity onPress={() => console.log('TODO: delete')}>
            <MaterialIcons
              name="delete"
              size={26}
              color="red"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={sortedTransactions}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.contentConatiner}
    />
  );
};

export default RecentTransactions;
