import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import useCardStyle from '../hooks/useCardStyle';
import { useSelector } from 'react-redux';

const CardSection = () => {
  const styles = useCardStyle();

  const transactions = useSelector(state => state.transaction.transactions);

  const income = transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const total = income - expense;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <Text style={styles.cardValue}>₹ {total.toFixed(2)}</Text>

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
