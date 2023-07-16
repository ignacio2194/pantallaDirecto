import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const SelectGender = () => {
  const [isMaleSelected, setIsMaleSelected] = useState(false);
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const navigation = useNavigation();

  const handleMaleCheckbox = () => {
    setIsMaleSelected(!isMaleSelected);
    setIsFemaleSelected(false);
  };

  const handleFemaleCheckbox = () => {
    setIsMaleSelected(false);
    setIsFemaleSelected(!isFemaleSelected);
  };

  const handleContinue = () => {
    console.log(isMaleSelected)
    if (!isMaleSelected || !isFemaleSelected) {
      navigation.navigate('ValidateIdentity');
    }
  };

  return (
    <ImageBackground
    source={require("../img/bgRn.png")}
    style={styles.imageBackground}>
    <Image source={require("../img/directoImg.png")} style={styles.img}  />
      <View style={styles.container}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={20} color="#000000" style={styles.backButtonIcon} />
        </TouchableOpacity> */}
        <View>
          <Text style={styles.titleText}>Ingresá tu género</Text>
          <Text style={styles.Text}>
            Para validar tu usuario, necesitamos que indiques tu género.
          </Text>
        </View>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderOption,
              isMaleSelected && styles.genderOptionSelected,
            ]}
            onPress={handleMaleCheckbox}
          >
            <Text style={styles.genderText}>Femenino</Text>
            {isMaleSelected ? (
              <View style={styles.checkboxSelected}>
                <Icon name="checkmark-sharp" size={16} color="#47D14B" />
              </View>
            ) : (
              <View style={styles.checkboxEmpty}></View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              isFemaleSelected && styles.genderOptionSelected,
            ]}
            onPress={handleFemaleCheckbox}
          >
            <Text style={styles.genderText}>Masculino</Text>
            {isFemaleSelected ? (
              <View style={styles.checkboxSelected}>
                <Icon name="checkmark-sharp" size={16} color="#47D14B" />
              </View>
            ) : (
              <View style={styles.checkboxEmpty}></View>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.continueButton,
            (!isMaleSelected && !isFemaleSelected) && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!isMaleSelected && !isFemaleSelected}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.ComeBacktoTheShop}>Volver a la tienda</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    top: 70,
    borderRadius: 40,
    backgroundColor: "#fff",
    padding: 20,
    paddingVertical:40
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  backButtonIcon: {
    marginRight: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign:'left',
    lineHeight: 30,
    color: "#004489",
    marginTop: 20,

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
  Text: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "400",
    textAlign:'left',
    lineHeight: 24,
    color: "#004489",
  },
  genderContainer: {
    marginTop: 20,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginVertical: 5,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#E8E8E8",
  },
  genderOptionSelected: {
    borderColor: "#47D14B",
  },
  genderText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#004489",
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    backgroundColor: "#C8F8C8",
    color: "#C8F8C8",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  checkboxEmpty: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    marginLeft: "auto",
  },
  continueButton: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 220,
    paddingVertical:15,
    backgroundColor: "#0069D7",
  },
  continueButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  continueButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  ComeBacktoTheShop: {
    color: "#004489",
    textDecorationLine: "underline",
    fontWeight: "bold",
    lineHeight:24,
    textAlign: "center",
    marginTop: 15,
  },
});

export default SelectGender;
