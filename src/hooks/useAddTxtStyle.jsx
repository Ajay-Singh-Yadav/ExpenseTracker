import { StyleSheet } from 'react-native';

import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Sizes from '../utils/responsive';

const useAddTxtStyle = () => {
  const { theme } = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.background,
        },
        header: {
          marginTop: Sizes.verticalScale(20),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: Sizes.scale(10),
        },
        backButton: {
          marginLeft: Sizes.scale(5),
        },
        title: {
          fontWeight: '500',
          fontSize: Sizes.fontSM,
          color: theme.text,
        },
        saveButton: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        line: {
          marginTop: Sizes.verticalScale(10),
          height: 2,
          width: '100%',
          backgroundColor: theme.border,
        },
      }),
    [theme],
  );
};

export default useAddTxtStyle;
