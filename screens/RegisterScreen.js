import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Modal
} from "react-native";
import { Text } from "react-native-elements";
import axios from "axios";
import { host } from "../ip";
// import firebase from 'firebase/app'
// import messaging from '@react-native-firebase/messaging';

const RegisterScreen = ({ navigation }) => {
  const [first, setFirstName] = useState("");
  const [last, setLastName] = useState("");
  const [messid, setMessId] = useState("");
  const [password, setPassword] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useLayoutEffect(() => {
    Keyboard.dismiss();
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const clearInputFields = () => {
    alert("Successfully Created Account");
    navigation.replace("Home");
    setSubmitLoading(false);
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const signUp = async () => {
    try {
      // await messaging().registerDeviceForRemoteMessages();
      // const token = await messaging().getToken();
      console.log(first, last, messid, password);
      axios
        .post(`${host}/api/student/register`, {
          firstName: first,
          lastName: last,
          sid: messid,
          password: password,
        })
        .then(function (response) {
          // console.log(response);
          setSuccess(true);
          // setEntryModal(true);
          // setTimeout(navigation.navigate("Home"), 2000);
          navigation.navigate("Login");
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Modal animationType="slide" transparent={true} visible={success}>
        <View style={styles.centeredViewNew1}>
          <View style={styles.modalViewNew1}>
            <Image
              style={{
                width: 75,
                height: 75,
                alignSelf: "center",
                resizeMode: "contain",
              }}
              source={require("../assets/check.png")}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                color: "#311E15",
                margin: 10,
              }}
            >
              Entry Added successfully! 🥳️
            </Text>
          </View>
        </View>
      </Modal> */}
      <Image
        style={{
          height: 250,
          resizeMode: "contain",
        }}
        source={require("../assets/hostel_mess.png")}
      />
      <Text
        style={{
          color: "#311E15",
          marginTop: 25,
          marginBottom: 50,
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        VJTI Mess Registration
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ color: "#000000", fontSize: 18, marginTop: 10 }}
          placeholderTextColor={"#F3DACC"}
          placeholder="First Name"
          type="text"
          autoFocus
          value={first}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={{ color: "#000000", fontSize: 18, marginTop: 20 }}
          placeholderTextColor={"#F3DACC"}
          placeholder="Last Name"
          type="text"
          autoFocus
          value={last}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={{ color: "#000000", fontSize: 18, marginTop: 20 }}
          placeholderTextColor={"#F3DACC"}
          placeholder="Mess ID"
          type="text"
          value={messid}
          onChangeText={(text) => setMessId(text)}
        />
        <TextInput
          style={{ color: "#000000", fontSize: 18, marginTop: 20 }}
          placeholderTextColor={"#F3DACC"}
          placeholder="Password"
          type="text"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: "5%" }}>
        <TouchableOpacity
          style={styles.add}
          loading={submitLoading}
          onPress={signUp}
        >
          <Text
            style={{
              color: "white",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            {" "}
            Register{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          loading={submitLoading}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "#311E15",
              paddingHorizontal: 15,
              paddingVertical: 15,
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            {" "}
            Cancel{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 20,
    marginTop: "-10%",
  },
  button: {
    width: 300,
    marginTop: 25,
  },
  add: {
    width: 120,
    backgroundColor: "#311E15",
    height: 50,
    borderRadius: 20,
  },
  cancel: {
    width: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderColor: "#311E15",
    borderWidth: 1,
    height: 50,
    borderRadius: 20,
    marginLeft: 30,
  },
  centeredViewNew1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  modalViewNew1: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    width: "70%",
    elevation: 50,
    shadowColor: "#AAA",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
