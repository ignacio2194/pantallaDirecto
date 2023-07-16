import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; // Importamos el icono de Ionicons
import { useNavigation } from "@react-navigation/native";

const ValidateIdentity = () => {
  const [userFound, setUserFound] = useState('Juan Pablo Gónzalez');
  const [isUserSelected, setIsUserSelected] = useState(false);
  const navigation = useNavigation();

  const handleSelectUser = () => {
    setIsUserSelected(!isUserSelected); // Cambiamos el estado al hacer clic
  };

  const handleContinue = () => {
    if (isUserSelected) {
      navigation.navigate('ValidateCellPhoneNum');
    }
  };

  return (
    <ImageBackground
      source={require("../img/bgRn.png")}
      style={styles.imageBackground}
    >
      <Image
        source={require("../img/directoImg.png")}
        style={styles.img}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          {/* <Icon
            name="arrow-back"
            size={20}
            color="#000000"
            style={ {marginTop:5, padding:5}}
          /> */}
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.titleText}>Validemos tu identidad</Text>
            <Text style={styles.Text}>
              Tu DNI y género nos arrojó este resultado. ¿Sos vos? Si no, revisá
              y editá el número de DNI ingresado anteriormente.
            </Text>
          </View>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderOption,
                isUserSelected && styles.genderOptionSelected,
              ]}
              onPress={handleSelectUser}
            >
              <Text style={styles.genderText}>{userFound}</Text>
              {isUserSelected ? (
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
              !isUserSelected && styles.continueButtonDisabled,
            ]}
            disabled={!isUserSelected}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Sí, soy yo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.notMyNameBTN}>No es mi nombre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    top:65,
    backgroundColor: "#fff",
    borderRadius: 40,
    padding:10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 40,
 
  },
  img: {
    width: 160,
    height: 37,
    position: "absolute",
    top: 20,
    left: 16,
  },
  formContainer: {
    flex: 1,

  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
    color: "#004489",
    marginTop: 20,
    marginLeft: 20,
  },
  Text: {
    fontSize: 16,
    fontWeight: "400",
    padding:20,
    textAlign:'left',
    marginTop: 10,
    lineHeight: 24,
    color: "#004489",
  },
  genderContainer: {
    marginTop: 5,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#E8E8E8",
  },
  genderOptionSelected: {
    borderColor: "#47D14B",
  },
  genderText: {
    color: "#004489",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 16,
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    backgroundColor: "#C8F8C8",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  checkboxIcon: {
    width: 20,
    height: 20,
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
    marginTop: 275,
    backgroundColor: "#0069D7",
  },
  continueButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  continueButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    padding:5
    
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
});

export default ValidateIdentity;
