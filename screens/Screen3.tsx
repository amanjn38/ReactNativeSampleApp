import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtherScreen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Buttons</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtherScreen1;
