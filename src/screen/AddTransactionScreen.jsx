import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import useAddTxtStyle from '../hooks/useAddTxtStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddTransactionScreen = () => {
  const styles = useAddTxtStyle();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>New Transaction</Text>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
          <Ionicons name="checkmark" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Line  */}
      <View style={styles.line} />

      {/* Card Section */}

      <View style={styles.cardContainer}>
        {/* Card */}
        <View style={styles.card}>
          <View style={styles.InExContainer}>
            <View style={styles.InEx}>
              <Ionicons name="arrow-up-circle" size={25} color="green" />
              <Text style={styles.InExText}>Income</Text>
            </View>
            <View style={styles.InEx}>
              <Ionicons name="arrow-down-circle" size={25} color="red" />
              <Text style={styles.InExText}>Expense</Text>
            </View>
          </View>

          {/* TextInput */}
          <View style={styles.inputContainer}>
            <FontAwesome name="dollar" size={30} color="black" />
            <TextInput style={styles.input} placeholder="Enter Amount" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({});
