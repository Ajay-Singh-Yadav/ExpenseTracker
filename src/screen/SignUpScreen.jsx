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

const SignUpScreen = () => {
  const styles = useLogInStyle();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      setMessage('All fields are required.');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      setName('');
      setEmail('');
      setPassword('');
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setMessage('That email address is invalid!');
      } else if (error.code === 'auth/weak-password') {
        setMessage('Password should be at least 6 characters');
      } else {
        setMessage(error.message);
      }
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
          source={require('../assets/images/revenue-i4.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Create an account !</Text>
      </View>

      <InputField
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        keyboardType="email-address"
        icon="person-outline"
        containerStyle={{ marginBottom: Sizes.verticalScale(30) }}
      />

      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        icon="mail-outline"
        containerStyle={{ marginBottom: Sizes.verticalScale(30) }}
      />

      <InputField
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        icon="lock-closed-outline"
        containerStyle={{ marginBottom: Sizes.verticalScale(25) }}
      />

      {message !== '' && (
        <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
          {message}
        </Text>
      )}

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
        <Text style={styles.signInButtonText}>SignUp</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.linkText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View></View>
    </ScrollView>
  );
};

export default SignUpScreen;
