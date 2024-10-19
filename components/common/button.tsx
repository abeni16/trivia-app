import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  style?: any; // Allow any style object
  variant?: 'primary' | 'secondary';
  title?: string;
}

export default function Button({ children, onPress, style, variant, title }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles.button,
      variant === 'primary' && styles.primary,
      variant === 'secondary' && styles.secondary,
      style // Apply custom styles last
    ]}>
      <Text style={styles.buttonText}>{title || children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  primary: {
    backgroundColor: 'blue',
  },
  secondary: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
