import React, { memo, useEffect, useRef } from 'react';
import { Animated, View, Image, InteractionManager, Text } from 'react-native';
import useSplash from '../hooks/useSplash';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const styles = useSplash();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const lottieRef = useRef(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      navigation.replace('LogIn');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    lottieRef.current?.play();

    return () => {
      lottieRef.current?.reset();
    };
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require('../assets/images/revenue-i2.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <LottieView
        ref={lottieRef}
        source={require('../assets/animations/coin.json')}
        autoPlay
        loop={true}
        style={styles.lottie}
      />
    </Animated.View>
  );
};

export default memo(SplashScreen);
