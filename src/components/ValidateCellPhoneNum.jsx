import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import IconPhone from "react-native-vector-icons/Feather";
import IconLocation from "react-native-vector-icons/EvilIcons";
import { TextInput } from "react-native-gesture-handler";

const ValidateCellPhoneNum = () => {
  return (
    <ImageBackground
      source={require("../img/bgRn.png")}
      style={styles.imageBackground}
    >
      <Image source={require("../img/directoImg.png")} style={styles.img} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.backButton}>
            {/* <Icon
            name="arrow-back"
            size={20}
            color="#000000"
            style={styles.backButtonIcon}
          /> */}
          </TouchableOpacity>
          <View>
            <Text style={styles.titleText}>
              Juan, necesitamos algunos datos para continuar
            </Text>
            <Text style={styles.Text}>
              Te enviaremos un código por SMS a tu celular para que veas la
              financiación que tenemos para vos.
            </Text>
          </View>
          <View style={styles.inputsContainer}>
          <View style={styles.inputCodNum}>
          <IconPhone name="phone" size={20} color="#000000" style={styles.PhoneIcon}/>
            <TextInput
              style={styles.input}
              placeholder="Cod de Area"
            ></TextInput>
          </View>
          <View style={styles.inputCodNum}>
            <TextInput
              style={styles.input}
              placeholder="N° de celular"
            ></TextInput>
      
          </View>
          <View style={styles.inputLocation}>
            <IconLocation name="location" size={20} color="#000000" />
            <TextInput
              style={[styles.input, styles.fullWidthInput]}
              placeholder="Ingresa tu ubicación"
            ></TextInput>
          </View>
          </View>
       
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
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
    top: 84,
    left: 16,
  },
  formContainer: {
    width: "100%",
    height: 477,
    borderRadius: 40,
    backgroundColor: "#fff",
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    color: "#004489",
    marginTop: 20,
    marginLeft: 30,
  },
  Text: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    lineHeight: 16,
    color: "#004489",
  },
  inputsContainer:{
    display:'flex',
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    width:327,
    height:136
  },
  inputCodNum: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "50%",
    textAlign:'justify'
  },
  inputLocation:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },

  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: 10,
  },
  PhoneIcon:{
    position:'absolute',
    left:15,
    color:'#656566'

  },
  fullWidthInput: {
    width: "100%",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  backButtonIcon: {
    marginRight: 5,
  },
});

export default ValidateCellPhoneNum;
