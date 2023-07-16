import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import RegisterUser from './RegisterUser';
import 'react-native-gesture-handler';

const Home = () => {
  return (
    <ImageBackground  source={require("../img/bgRn.png")}
    style={styles.imageBackground}>
        <Image source={require("../img/directoImg.png")} style={styles.img}  />
  
      <RegisterUser/>
  </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00FFED',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    img: {
      width: 160,
    height: 37,
    position: "absolute",
    top: 20,
    left: 16,
    },
  });
  
export default Home