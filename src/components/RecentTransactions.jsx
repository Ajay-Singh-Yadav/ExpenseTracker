import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useRecentTxtStyle from '../hooks/useRecentTxtStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import categories from '../constant/categories';
import Sizes from '../utils/responsive';
import { useTheme } from '../context/ThemeContext';

const RecentTransactions = () => {
  const styles = useRecentTxtStyle();
  const { theme } = useTheme();
  const transactions = useSelector(state => state.transaction.transactions);
  const sortedTransactions = [...transactions].sort(
    (a, b) => b.timestamp - a.timestamp,
  );

  const renderItem = ({ item }) => {
    const matchedCategory = categories.find(cat => cat.name === item.category);
    const CategoryIcon = matchedCategory?.lib;
    const categoryIconName = matchedCategory?.icon;

    return (
      <View style={styles.container}>
        <View style={styles.LeftView}>
          {CategoryIcon && (
            <CategoryIcon
              name={categoryIconName}
              size={Sizes.scale(20)}
              color={theme.text}
              style={styles.recentIcon}
            />
          )}
          <View style={styles.slaryView}>
            <Text style={styles.salaryText}>{item.title}</Text>
            <Text style={styles.datetext}>{item.category}</Text>
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
            <Text style={[styles.datetext, { textAlign: 'center' }]}>
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
  };

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
