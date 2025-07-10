import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Sizes from '../utils/responsive';

const useSplash = () => {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContaoiner: {
          flex: 1,
          backgroundColor: theme.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          flex: 1,
          backgroundColor: theme.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
        image: {
          width: Sizes.screenWidth * 0.6,
          height: Sizes.screenHeight * 0.3,
          marginBottom: 20,
          resizeMode: 'contain',
        },
        text: {
          color: theme.text,
          fontSize: 16,
        },
        lottie: {
          width: 200,
          height: 200,
        },
      }),
    [theme],
  );

  return styles;
};

export default useSplash;
