import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import InputField from '../components/InputField';
import { useNavigation } from '@react-navigation/native';
import useLogInStyle from '../hooks/useLogInStyle';
import Sizes from '../utils/responsive';

import auth from '@react-native-firebase/auth';

import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const styles = useLogInStyle();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      if (!email || !password) {
        alert('All fields are required');
        return;
      }

      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/revenue-i2.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome Back !</Text>
      </View>

      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        icon="mail-outline"
        containerStyle={{ marginBottom: Sizes.verticalScale(35) }}
      />

      <InputField
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        icon="lock-closed-outline"
        containerStyle={{ marginBottom: Sizes.verticalScale(25) }}
      />

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignin}>
        <Text style={styles.signInButtonText}>SignIn</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* LogIn Options */}
      <View style={styles.LoginOptions}>
        <TouchableOpacity style={styles.mobileButton}>
          <Ionicons name="phone-portrait-outline" size={30} color="#000" />
          <Text style={styles.mobileButtonText}>Mobile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mobileButton}>
          <Image
            source={require('../assets/icons/Google.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.mobileButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mobileButton}>
          <Image
            source={require('../assets/icons/facebook.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.mobileButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
