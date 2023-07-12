import React,{useState} from "react";
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
  const [areaCode, setAreaCode] = useState("Cod de Area");
  const [phoneNumber, setPhoneNumber] = useState("Num celular");
  const [location, setLocation] = useState("ubicacion");
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
              <IconPhone
                name="phone"
                size={20}
                color="#000000"
                style={styles.PhoneIcon}
              />
              <TextInput
                style={styles.input}
                placeholder={areaCode}
              ></TextInput>
            </View>
            <View style={styles.inputCodNum}>
              <TextInput
                style={styles.input}
                placeholder={phoneNumber}
              ></TextInput>
            </View>
            <View style={styles.inputLocation}>
              <IconLocation
                name="location"
                size={20}
                color="#000000"
                style={styles.LocationIcon}
              />
              <TextInput
                style={[styles.input, styles.fullWidthInput]}
                placeholder={location}
              ></TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.termsText}>
              Al continuar declaro que soy mayor de edad y acepto los{" "}
              <Text style={styles.underlineText}>Términos y condiciones</Text>{" "}
              y las{" "}
              <Text style={styles.underlineText}>Políticas de privacidad</Text>{" "}
              de Directo.
            </Text>
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
    height: "100%",
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
  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: 327,
    height: 136,
  },
  inputCodNum: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "50%",
    textAlign: "center",
  },
  inputLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  icon:{
    marginLeft: 10,
    padding: 5,
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
  PhoneIcon: {
    position: "absolute",
    left: 15,
    color: "#656566",
  },
  LocationIcon: {
    position: "absolute",
    left: 15,
    paddingRight:50,
    color: "#656566",
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
  termsText: {
    textAlign: "justify",
    marginTop: 20,
  },
  underlineText: {
    color: "#0069D7",
    textDecorationLine: "underline",
  },
});

export default ValidateCellPhoneNum;
