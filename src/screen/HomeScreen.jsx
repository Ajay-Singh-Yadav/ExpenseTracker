import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useHomeScreenStyle from '../hooks/useHomeScreenStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardSection from '../components/CardSection';

const HomeScreen = () => {
  const styles = useHomeScreenStyle();

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
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name={'add'} size={20} color="#fff" />
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name={'logout'} size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card Section */}

      <CardSection />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
