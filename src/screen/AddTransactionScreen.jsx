import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import useAddTxtStyle from '../hooks/useAddTxtStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    </SafeAreaView>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({});
