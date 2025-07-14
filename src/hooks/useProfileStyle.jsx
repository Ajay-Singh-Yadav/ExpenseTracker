import { StyleSheet, useWindowDimensions } from 'react-native';

import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import Sizes from '../utils/responsive';

const useProfileStyle = () => {
  const { theme } = useTheme();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isportrait = width < height;

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: Sizes.scale(16),
          paddingTop: Sizes.verticalScale(20),
          backgroundColor: '#fff',
        },
        header: {
          fontSize: Sizes.fontSM,
          fontWeight: '600',
          marginBottom: Sizes.verticalScale(10),
        },
        profileContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 25,
        },
        avatar: {
          backgroundColor: '#d8d8d8',
          borderRadius: Sizes.scale(32),
          width: Sizes.scale(54),
          height: Sizes.scale(52),
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: Sizes.scale(10),
        },
        avatarText: {
          fontSize: Sizes.fontSM,
          fontWeight: '600',
          color: '#000',
        },
        name: {
          fontSize: Sizes.fontSM,
          fontWeight: '700',
        },
        number: {
          fontSize: Sizes.fontXS,
          color: '#555',
        },
        sectionTitle: {
          fontWeight: '600',
          fontSize: Sizes.fontSM,
        },

        menuItem: {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: Sizes.verticalScale(10),
          gap: Sizes.scale(10),
        },
        menuText: {
          //   fontSize: Sizes.fontXS,
        },
        sectionLabel: {
          marginTop: Sizes.verticalScale(20),
          marginBottom: Sizes.verticalScale(10),
          fontWeight: '600',
          fontSize: Sizes.fontSM,
          color: '#000',
        },
        logoutButton: {
          marginTop: Sizes.verticalScale(30),
          borderWidth: 1,
          borderColor: '#ccc',
          paddingVertical: Sizes.verticalScale(10),
          borderRadius: Sizes.scale(20),
          alignItems: 'center',
        },
        logoutText: {
          color: '#0b57d0',
          fontWeight: '600',
          fontSize: Sizes.fontSM,
        },
        version: {
          textAlign: 'center',
          marginTop: Sizes.verticalScale(20),

          color: '#555',
        },
      }),
    [theme, width, height, isLandscape],
  );
};

export default useProfileStyle;
