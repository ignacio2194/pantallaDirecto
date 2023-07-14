import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import IconPhone from "react-native-vector-icons/Feather";
import IconLocation from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
const provinces = [
  "Buenos Aires",
  "Córdoba",
  "Santa Fe",
  "Mendoza",
];

const ValidateCellPhoneNum = () => {
  const [areaCode, setAreaCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [provincesFiltered, setProvincesFiltered] = useState([]);
  const navigation = useNavigation();
  const handleAreaCodeChange = (text) => {
    setAreaCode(text);
    checkButtonState(text, phoneNumber, location);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    checkButtonState(areaCode, text, location);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
    filterProvinces(text);
    checkButtonState(areaCode, phoneNumber, text);
  };

  const checkButtonState = (areaCode, phoneNumber, location) => {
    if (areaCode !== "" && phoneNumber !== "" && location !== "") {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  const filterProvinces = (text) => {
    const filtered = provinces.filter((province) =>
      province.toLowerCase().includes(text.toLowerCase())
    );
    setProvincesFiltered(filtered);
  };

  const handleProvinceSelect = (province) => {
    setLocation(province);
    setProvincesFiltered([]);
  };

  const handleButtonPress = () => {
   if (areaCode !== "" && phoneNumber !== "" && location !== "") {
    navigation.navigate('ValidateNumSms')
    } else {
      console.log("datos erroneos")
    }
  };

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
                placeholder="Cod de Area"
                value={areaCode}
                onChangeText={handleAreaCodeChange}
              />
            </View>
            <View style={styles.inputCodNum}>
              <TextInput
                style={styles.input}
                placeholder="N° de celular"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
              {/* <IconPhone
                name="phone"
                size={20}
                color="#000000"
                style={styles.PhoneIcon}
              /> */}
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
                placeholder="Ingresa tu ubicación"
                value={location}
                onChangeText={handleLocationChange}
              />
              {provincesFiltered.length > 0 && (
                <View style={styles.autocompleteContainer}>
                  {provincesFiltered.map((province) => (
                    <TouchableOpacity
                      key={province}
                      style={[
                        styles.autocompleteItem,
                        province === location && styles.selectedProvince
                      ]}
                      onPress={() => handleProvinceSelect(province)}
                    >
                      <Text
                        style={[
                          styles.provinceText,
                          province === location && styles.selectedProvinceText
                        ]}
                      >
                        {province}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              Al continuar declaro que soy mayor de edad y acepto los{" "}
              <Text style={styles.termsLink}>Términos y condiciones</Text> y las{" "}
              <Text style={styles.termsLink}>Políticas de privacidad</Text> de Directo.
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.continueButton,
              isButtonEnabled
                ? styles.continueButtonEnabled
                : styles.continueButtonDisabled,
              { marginTop: 15}
            ]}
            onPress={handleButtonPress}
            disabled={!isButtonEnabled}
          >
            <Text style={styles.continueButtonText}>Enviar</Text>
          </TouchableOpacity>
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
    textAlign: "justify",
  },
  inputLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    position: "relative",
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: 10,
    paddingLeft: 30,
  },
  PhoneIcon: {
    position: "absolute",
    left: 15,
    color: "#656566",
  },
  LocationIcon: {
    position: "absolute",
    left: 15,
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
  continueButton: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#E8E8E8",
  },
  continueButtonEnabled: {
    backgroundColor: "#0069D7",
  },
  continueButtonDisabled: {
    backgroundColor: "#E8E8E8",
  },
  continueButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  termsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  termsText: {
    textAlign: "justify",
    fontSize: 12,
    lineHeight: 16,
    marginTop:100,
    color: "#004489",
  },
  termsLink: {
    color: "#0069D7",
    textDecorationLine: "underline",
  },
  autocompleteContainer: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  autocompleteItem: {
    paddingVertical: 5,
  },
  provinceText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#004489",
    fontWeight: "400",
  },
  selectedProvince: {
    backgroundColor: "#E8E8E8",
  },
  selectedProvinceText: {
    color: "#ffffff",
  },
});

export default ValidateCellPhoneNum;