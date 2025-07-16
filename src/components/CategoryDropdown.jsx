import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Sizes from '../utils/responsive';
// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const categories = [
  {
    label: 'Food & Drinks',
    value: 'Food & Drinks',
    icon: 'fast-food-outline',
    lib: Ionicons,
  },
  { label: 'Shopping', value: 'Shopping', icon: 'shopping-bag', lib: Feather },
  { label: 'Travel', value: 'Travel', icon: 'airplane-outline', lib: Ionicons },
  {
    label: 'Entertainment',
    value: 'Entertainment',
    icon: 'film-outline',
    lib: Ionicons,
  },
  {
    label: 'Salary Income',
    value: 'Salary',
    icon: 'cash-outline',
    lib: Ionicons,
  },
  { label: 'Bills', value: 'Bills', icon: 'file-text', lib: Feather },

  { label: 'Rent', value: 'Rent', icon: 'home-outline', lib: Ionicons },
  {
    label: "Loan & EMI's",
    value: 'Loan & EMI',
    icon: 'credit-card',
    lib: Feather,
  },
  { label: 'Others', value: 'Others', icon: 'apps-outline', lib: Ionicons },
];

const CategoryDropdown = () => {
  const [value, setValue] = useState(null);
  const selectedLabel =
    categories.find(item => item.value === value)?.label ?? '';
  const dynamicWidth = Sizes.scale(selectedLabel.length > 8 ? 100 : 79);

  return (
    <Dropdown
      data={categories}
      labelField="label"
      valueField="value"
      placeholder="category"
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      placeholderStyle={styles.placeholder}
      selectedTextStyle={styles.selectedText}
      containerStyle={styles.dropdownBox}
      style={[styles.dropdown, { width: dynamicWidth }]}
      iconStyle={styles.iconStyle}
    />
  );
};

export default CategoryDropdown;

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    height: Sizes.scale(20),
    borderRadius: Sizes.scale(5),
    zIndex: 1000,
    justifyContent: 'center',
    paddingHorizontal: Sizes.scale(5),
  },

  iconStyle: {
    width: Sizes.scale(16),
    height: Sizes.scale(16),
    tintColor: '#888',
    justifyContent: 'center',
  },

  placeholder: {
    fontSize: 12,
    color: '#888',
  },

  dropdownBox: {
    borderRadius: 10,
  },
  selectedText: {
    fontSize: 12,
    color: '#000',
  },
});
