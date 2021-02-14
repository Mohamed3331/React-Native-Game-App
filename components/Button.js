import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const Button = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    width: 120,
    alignItems: 'center'
    
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 15
  }
});

export default Button;