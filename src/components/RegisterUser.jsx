import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconCard from 'react-native-vector-icons/FontAwesome';

const RegisterUser = () => {
  return (
    <View style={styles.formContainer}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={20} color="#000000" style={styles.backButtonIcon} />
      </TouchableOpacity>
      <View>
        <Text style={styles.titleText}>¡Bienvenido!</Text>
        <Text style={styles.Text}>Este es tu primer ingreso y para brindarte una mejor experiencia necesitamos tu DNI.</Text>
      </View>
      <View style={styles.inputContainer}>
      <IconCard name="vcard-o" size={20} color="#000000" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Ingresa tu DNI" />
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    height: 677,
    top: 135,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    left: 5,
    top: 25,
    zIndex: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    color: '#004489',
    marginTop: 20,
    marginLeft: 30,
  },
  Text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    color: '#004489',
  },
  input: {
    height: 40,
    paddingLeft: 30,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 5,
  },
  continueButton: {
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  continueButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  backButtonIcon: {
    marginRight: 5,
  },
});

export default RegisterUser;
