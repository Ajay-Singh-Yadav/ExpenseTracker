import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import useAddTxtStyle from '../hooks/useAddTxtStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTransaction } from '../redux/slice/transactionSlice';
import { useTheme } from '../context/ThemeContext';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Sizes from '../utils/responsive';
import Category from '../components/Category';

const AddTransactionScreen = () => {
  const { theme } = useTheme();
  const styles = useAddTxtStyle();

  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleAdd = () => {
    if (!amount || !type || !title || !selectedCategory) return;

    dispatch(
      addTransaction({
        id: uuidv4(),
        amount: parseFloat(amount),
        type,
        timestamp: Date.now(),
        title,
        category: selectedCategory,
      }),
    );

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back-sharp"
              size={Sizes.scale(20)}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.title}>New Transaction</Text>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleAdd}
            disabled={!amount || !type || !title || !selectedCategory}
          >
            <Text style={styles.saveText}>Save</Text>
            {/* <Ionicons name="checkmark" size={20} color="black" /> */}
          </TouchableOpacity>
        </View>

        {/* Line  */}
        <View style={styles.line} />

        {/* Card Section */}

        <View style={styles.cardContainer}>
          {/* Card */}
          <View style={styles.card}>
            <View style={styles.InExContainer}>
              <TouchableOpacity
                style={[styles.InEx, type === 'Income' && styles.selectedType]}
                onPress={() => setType('Income')}
              >
                <Ionicons
                  name="arrow-up-circle"
                  size={25}
                  color={type === 'Income' ? 'white' : 'green'}
                />
                <Text
                  style={[
                    styles.InExText,
                    type != 'Income' ? { color: 'Black' } : { color: 'white' },
                  ]}
                >
                  Income
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.InEx, type === 'Expense' && styles.selectedType]}
                onPress={() => setType('Expense')}
              >
                <Ionicons
                  name="arrow-down-circle"
                  size={25}
                  color={type === 'Expense' ? 'white' : 'red'}
                />
                <Text
                  style={[
                    styles.InExText,
                    type != 'Expense' ? { color: 'Black' } : { color: 'white' },
                  ]}
                >
                  Expense
                </Text>
              </TouchableOpacity>
            </View>

            {/* TextInput */}
            <View style={styles.inputContainer}>
              <FontAwesome
                name="rupee"
                size={30}
                color={theme.text}
                style={styles.icon}
              />
              <TextInput
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                style={styles.input}
                placeholder="Enter Amount"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.titleContainer}>
              <FontAwesome
                name="edit"
                size={Sizes.scale(15)}
                color={theme.text}
                style={[styles.icon, { marginLeft: 10 }]}
              />
              <TextInput
                value={title}
                onChangeText={setTitle}
                style={[styles.input, { fontSize: Sizes.fontXL }]}
                placeholder="Transaction Title"
                placeholderTextColor="#999"
              />
            </View>
            {/*  category */}
            <Category
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({});
