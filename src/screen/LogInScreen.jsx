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

import getAuth from '@react-native-firebase/auth';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Formik } from 'formik';
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .matches(
      /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      'Invalid email format',
    )
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = () => {
  const styles = useLogInStyle();
  const navigation = useNavigation();

  const handleLogIn = async (values, { setSubmitting, setErrors }) => {
    const { email, password } = values;

    try {
      await getAuth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrors({ email: 'No account found with this email' });
      } else if (error.code === 'auth/wrong-password') {
        setErrors({ password: 'Incorrect password' });
      } else if (error.code === 'auth/invalid-email') {
        setErrors({ email: 'Invalid email address' });
      } else {
        console.log('Login error:', error.message);
      }
    } finally {
      setSubmitting(false);
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

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LogInSchema}
        onSubmit={handleLogIn}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <>
            <View style={[styles.inputContainer]}>
              <InputField
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="Enter your email"
                keyboardType="email-address"
                icon="mail-outline"
              />
              <Text style={styles.errorText}>
                {touched.email && errors.email ? errors.email : ' '}
              </Text>
            </View>

            <View>
              <InputField
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Enter your password"
                secureTextEntry
                icon="lock-closed-outline"
              />

              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : (
                <Text style={styles.errorText}> </Text> // preserve spacing
              )}
            </View>

            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSubmit}
            >
              <Text style={styles.signInButtonText}>
                {isSubmitting ? 'Signing up...' : 'SignIn'}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

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
