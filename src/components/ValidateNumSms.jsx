import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ValidateNumSms = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [timer, setTimer] = useState(45);
  const [isResendButtonEnabled, setIsResendButtonEnabled] = useState(false);
  const inputs = useRef([]);

  const handleChangeCode = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (newCode.length === 4 && newCode.every((digit) => digit !== "")) {
      if (newCode.join("") === "4890") {
        setIsCodeCorrect(true);
        setTimer(0); // Detener el cronómetro
      } else {
        setIsCodeCorrect(false);
      }
    } else {
      setIsCodeCorrect(false);
    }
  };

  useEffect(() => {
    let interval;
    if (timer > 0 && !isCodeCorrect) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendButtonEnabled(true);
    }
    return () => clearInterval(interval);
  }, [timer, isCodeCorrect]);

  const handleResendCode = () => {
    setTimer(45);
    setIsResendButtonEnabled(false);
    setCode(["", "", "", ""]);
    inputs.current[0].focus();
  };

  return (
    <ImageBackground
      source={require("../img/bgRn.png")}
      style={styles.imageBackground}
    >
      <Image source={require("../img/directoImg.png")} style={styles.img} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Ingresá el código enviado</Text>
          <Text style={styles.text}>
            Te llegó por SMS al{" "}
            <Text style={{ color: "#004489", fontWeight: "bold" }}>
              114768 9054
            </Text>
          </Text>
          <Text
            style={{
              color: "#004489",
              textDecorationLine: "underline",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Quiero cambiar el celular
          </Text>
          <View style={styles.inputsContainer}>
            {Array.from({ length: 4 }, (_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                style={[
                  styles.inputContainer,
                  {
                    color: code[index] !== "" ? "#004489" : "#E8E8E8",
                    borderColor:
                      code[index] === ""
                        ? "#E8E8E8"
                        : isCodeCorrect
                        ? "#47D14B"
                        : "#F04438",
                  },
                ]}
                placeholderTextColor="#E8E8E8"
                placeholder="0"
                maxLength={1}
                keyboardType="numeric"
                value={code[index]}
                onChangeText={(value) => handleChangeCode(value, index)}
                editable={!isCodeCorrect && timer > 0}
                onFocus={() => {
                  if (code[index] !== "") {
                    let newCode = [...code];
                    newCode[index] = "";
                    setCode(newCode);
                  }
                }}
                onSubmitEditing={() => {
                  if (index < 3 && inputs.current[index + 1]) {
                    inputs.current[index + 1].focus();
                  }
                }}
              />
            ))}
          </View>
      
          <Text style={styles.timerText}>
            Si aún no lo recibiste en 0:
            {timer < 10 ? `0${timer}` : timer} podrás pedir otro.
          </Text>
          <TouchableOpacity
            style={[
              styles.anotherCodeBTn,
              !isResendButtonEnabled || isCodeCorrect
                ? styles.anotherCodeBTn_Disabled
                : styles.anotherCodeBTn_Enabled,
            ]}
            onPress={handleResendCode}
            disabled={!isResendButtonEnabled || isCodeCorrect}
          >
            <Text style={styles.anotherCodeBTn_Text}>
              Quiero un código nuevo
            </Text>
          </TouchableOpacity>
          <Text style={{  color: "#004489",
    textDecorationLine: "underline", fontWeight:'bold' , textAlign:'center' ,marginTop:15}}>
            Volver a la tienda
          </Text>
        </View>
   
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: 44,
    left: 16,
  },
  formContainer: {
    width: "100%",
    height: "100%",
    top: 100,
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
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    lineHeight: 16,
    color: "#004489",
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  inputContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    fontSize: 48,
    textAlign: "center",
    marginBottom: 10,
  },
  anotherCodeBTn: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
    textAlign: "center",
  },
  anotherCodeBTn_Enabled: {
    backgroundColor: "#0069D7",
  },
  anotherCodeBTn_Disabled: {
    backgroundColor: "#ccc",
  },
  anotherCodeBTn_Text: {
    color: "#fff",
    fontWeight: "bold",
  },
  timerText: {
    textAlign: "center",
    marginTop: 10,
    color: "#004489",
  },
});

export default ValidateNumSms;
