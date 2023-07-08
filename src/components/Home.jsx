import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import RegisterUser from './src/components/RegisterUser';
import 'react-native-gesture-handler';

const Home = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../img/bgRn.png')} style={styles.imageBackground}>
      <Image source={require('../img/directoImg.png')} style={styles.img} />
      <RegisterUser />
    </ImageBackground>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    img: {
      width: 160,
      height: 37,
      position: 'absolute',
      top: 84,
      left: 16,
    },
  });
  
export default Home