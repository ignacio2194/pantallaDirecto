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
      <View>
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
          <View style={styles.genderContainer}>
            <TextInput     placeholder="ingresa tu ubicacion">
            
            </TextInput>
            <IconLocation    name="location"
          size={20}
          color="#000000"
       />
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
    top: 135,
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
  genderContainer: {
    marginTop: 20,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: 5,
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
  },
  genderOptionSelected: {
    borderColor: "#47D14B",
  },
  genderText: {
    color: "#000000",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 16,
    color: "#004489",
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    backgroundColor: "#abf5ab",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  checkboxText: {
    color: "#1F951F",
    fontSize: 16,
    fontWeight: "300",
  },
  continueButton: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#0069D7",
  },
  continueButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  continueButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  notMyNameBTN: {
    textAlign: "center",
    marginTop: 10,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    color: "#004489",
    textDecorationLine: "underline",
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
