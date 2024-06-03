import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from '../components/FlatCards';
import ElevatedCards from '../components/ElevatedCards';
import FancyCard from '../components/FancyCards';
import ActionCard from '../components/ActionCard';
import ContactList from '../components/ContactList';

const MainScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
