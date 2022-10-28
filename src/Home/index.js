import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import { Container } from './styles';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Lmao</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
