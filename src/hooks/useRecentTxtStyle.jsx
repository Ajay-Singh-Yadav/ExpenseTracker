import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Sizes from '../utils/responsive';

const useRecentTxtStyle = () => {
  const { theme } = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: Sizes.scale(20),
          backgroundColor: theme.white,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          borderWidth: 1,
          borderColor: theme.border,
          borderRadius: Sizes.scale(10),
          padding: Sizes.scale(10),
          marginTop: Sizes.verticalScale(10),
        },
        contentConatiner: {
          paddingBottom: 25,
        },
        image: {
          width: Sizes.scale(30),
          height: Sizes.scale(30),
          resizeMode: 'contain',
        },
        LeftView: {
          flexDirection: 'row',
        },
        rightView: {
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: Sizes.scale(10),
        },

        slaryView: {
          marginLeft: Sizes.scale(10),
        },

        salaryText: {
          fontSize: Sizes.fontSM,
          fontWeight: '500',
          color: theme.text,
        },
        amoutText: {
          fontSize: Sizes.fontSM,
          fontWeight: '500',
          color: theme.income,
        },
        datetext: {
          fontSize: Sizes.fontXXS,
          color: theme.text,
          textAlign: 'center',
        },
        deleteIcon: {
          borderLeftWidth: 2,
          borderLeftColor: theme.border,
          marginLeft: Sizes.scale(10),
          height: Sizes.scale(40),
          justifyContent: 'center',
        },
        icon: {
          marginLeft: Sizes.scale(10),
        },
      }),
    [theme],
  );
};

export default useRecentTxtStyle;
