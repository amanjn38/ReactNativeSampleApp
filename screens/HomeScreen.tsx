import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Text 1:</Text>
      <TextInput
        style={styles.input}
        value={text1}
        onChangeText={setText1}
      />
      <Text style={styles.label}>Enter Text 2:</Text>
      <TextInput
        style={styles.input}
        value={text2}
        onChangeText={setText2}
      />
      <Button
        title="Go to Main Screen"
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default HomeScreen;
