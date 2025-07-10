import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Sizes from '../utils/responsive';

const useInputStyle = () => {
  const { theme } = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          marginBottom: Sizes.verticalScale(15),
          paddingHorizontal: Sizes.scale(14),
        },
        inputWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.white,
          borderRadius: Sizes.scale(12),
          paddingHorizontal: 10,
          paddingVertical: Platform.OS === 'android' ? 6 : 0,
          borderWidth: 1,
          borderColor: theme.border,
        },
        icon: {
          marginRight: 10,
        },
        input: {
          flex: 1,
          fontSize: 16,
          color: theme.text,
          paddingVertical: 10,
        },
      }),
    [theme],
  );
};

export default useInputStyle;
