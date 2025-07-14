import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import useCardStyle from '../hooks/useCardStyle';

const CardSection = () => {
  const styles = useCardStyle();

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <Text style={styles.cardValue}>₹ 5000.00</Text>

        <View style={styles.IncomeExpense}>
          <View style={styles.Income}>
            <Text style={styles.IncomeText}>Income</Text>
            <Text style={[styles.amoutText, { color: '#2ECC71' }]}>
              + ₹30000000
            </Text>
          </View>

          <View style={styles.line} />

          <View style={styles.Expense}>
            <Text style={styles.ExpenseText}>Expense</Text>
            <Text style={[styles.amoutText, { color: '#E74C3C' }]}>
              - ₹2000000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSection;
