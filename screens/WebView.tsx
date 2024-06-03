import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type OtherScreen2NavigationProp = StackNavigationProp<RootStackParamList, 'WebView'>;

const OtherScreen2: React.FC = () => {
  const navigation = useNavigation<OtherScreen2NavigationProp>();

  return (
    <View style={styles.container}>
      <Text>WebView. Click on the button to open Google.com</Text>
      <Button title="Open Google" onPress={() => navigation.navigate('WebView')} />
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

export default OtherScreen2;
