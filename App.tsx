import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import TrendingPlaces from './components/TrendingPlaces';
import ContactList from './components/ContactList';
import BlogCard from './components/BlogCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <TrendingPlaces />
        <ContactList />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
