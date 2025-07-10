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

const LoginScreen = () => {
  const styles = useLogInStyle();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
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

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>SignIn</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
