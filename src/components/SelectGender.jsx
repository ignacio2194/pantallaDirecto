import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
const SelectGender = () => {
  const [isMaleSelected, setIsMaleSelected] = useState(false);
  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const navigation = useNavigation();
  const handleMaleCheckbox = () => {
    setIsMaleSelected(true);
    setIsFemaleSelected(false);
  };

  const handleFemaleCheckbox = () => {
    setIsMaleSelected(false);
    setIsFemaleSelected(true);
  };

  const handleContinue = () => {
    if( !isMaleSelected || !isFemaleSelected){
      navigation.navigate('ValidateIdentity')
    }
    console.log("yender a validad identidad")
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/bgRn.png")}
        style={styles.imageBackground}
      >
        <Image source={require("../img/directoImg.png")} style={styles.img} />
      </ImageBackground>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={20}
            color="#000000"
            style={styles.backButtonIcon}
          />
        </TouchableOpacity>
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
            <Text style={styles.genderText}>Masculino</Text>
            {isMaleSelected && (
              <View style={styles.checkboxSelected}>
                <Text style={styles.checkboxText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              isFemaleSelected && styles.genderOptionSelected,
            ]}
            onPress={handleFemaleCheckbox}
          >
            <Text style={styles.genderText}>Femenino</Text>
            {isFemaleSelected && (
              <View style={styles.checkboxSelected}>
                <Text style={styles.checkboxText}>✓</Text>
              </View>
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
          <Text  disabled={!isMaleSelected && !isFemaleSelected} style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  backButtonIcon: {
    marginRight: 5,
  },
});

export default SelectGender;
