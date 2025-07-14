import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'LogIn' }],
      });
    } catch (error) {}
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>AS</Text>
        </View>
        <View>
          <Text style={styles.name}>Ajay Singh Yadav</Text>
          <Text style={styles.number}>8923442408 </Text>
        </View>
      </View>

      {/* Mobile Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <Text style={styles.sectionSubTitle}>
          8923442408 | Ajay Singh Yadav
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Ionicons name="color-palette-outline" size={20} color="#000" />
        <Text style={styles.menuText}>App theme</Text>
      </View>

      {/* Help & Support */}
      <Text style={styles.sectionLabel}>Help & Support</Text>

      <View style={styles.menuItem}>
        <Ionicons name="help-circle-outline" size={20} color="#000" />
        <Text style={styles.menuText}>Contact: Help & support</Text>
      </View>

      <View style={styles.menuItem}>
        <MaterialCommunityIcons
          name="information-outline"
          size={20}
          color="#000"
        />
        <Text style={styles.menuText}>About Expense Tracker</Text>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Version */}
      <Text style={styles.version}>App Version 1.0.0</Text>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    backgroundColor: '#d8d8d8',
    borderRadius: 32,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  number: {
    fontSize: 14,
    color: '#555',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 15,
  },
  sectionSubTitle: {
    color: '#555',
    marginTop: 2,
  },
  switchBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  switchText: {
    color: '#0b57d0',
    fontWeight: '600',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 12,
  },
  menuText: {
    fontSize: 15,
  },
  sectionLabel: {
    marginTop: 25,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  logoutButton: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#0b57d0',
    fontWeight: '600',
    fontSize: 16,
  },
  version: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 13,
    color: '#555',
  },
});
