import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import useRecentTxtStyle from '../hooks/useRecentTxtStyle';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RecentTransactions = () => {
  const styles = useRecentTxtStyle();
  return (
    <View style={styles.container}>
      <View style={styles.LeftView}>
        <Image
          source={require('../assets/icons/wages.png')}
          style={styles.image}
        />
        <View style={styles.slaryView}>
          <Text style={styles.salaryText}>Salary</Text>
          <Text style={styles.datetext}>Income</Text>
        </View>
      </View>

      <View style={styles.rightView}>
        <View>
          <Text style={styles.amoutText}>+₹500000</Text>
          <Text style={styles.datetext}>23/05/2023</Text>
        </View>

        <View style={styles.deleteIcon}>
          <TouchableOpacity>
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

export default RecentTransactions;
