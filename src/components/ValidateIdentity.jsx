import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ValidateIdentity = () => {
  const [userFound, setUserFound] = useState('Juan Pablo Gónzalez');
  const [isUserSelected, setIsUserSelected] = useState(false);
  const navigation = useNavigation();

  const handleSelectUser = () => {
    setIsUserSelected(true);
  };
  const handleContinue=()=>{
    navigation.navigate('ValidateCellPhoneNum')
  }

  return (
    
      <View style={styles.container}>
        <ImageBackground
          source={require("../img/bgRn.png")}
          style={styles.imageBackground}
        >
          <Image
            source={require("../img/directoImg.png")}
            style={styles.img}
          />
        </ImageBackground>
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
              {isUserSelected && (
                <View style={styles.checkboxSelected}>
                  <Text style={styles.checkboxText}>✓</Text>
                </View>
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
  notMyNameBTN:{
    textAlign:'center',
    marginTop:10,
    fontWeight:'500',
    fontSize:16,
    lineHeight:16,
    color:'#004489',
    textDecorationLine:'underline'

    
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

export default ValidateIdentity;
