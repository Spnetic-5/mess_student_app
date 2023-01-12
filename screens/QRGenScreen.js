import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Switch, ToastAndroid, TextInput } from "react-native";
import styled from "styled-components/native";
import QRCode from "react-native-qrcode-svg";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import CounterInput from "react-native-counter-input";
import { Permissions } from 'expo';

export default function QRScanner() {
  const navigation = useNavigation();
  const [status, setStatus] = useState(1);
  const [wantChicken, setWantChicken] = useState(false);
  const [chickenCount, setChickenCount] = useState(0);

  let qr_ref = null;
  const saveQrToDisk = () => {
    if (qr_ref != null) {
      qr_ref?.toDataURL((dataUri) => {
        // console.log(dataUri);
        // Get the file name from the data URI
        const fileName = dataUri.split(';')[0].split('/')[1].split('+')[0];
        // Create the local file path where the image will be saved
        const fileUri = FileSystem.documentDirectory + fileName;
        try {
          // Write the data URI to the local file
          // const { status } = Permissions?.askAsync(Permissions?.CAMERA_ROLL);
          FileSystem.writeAsStringAsync(fileUri, dataUri, { encoding: FileSystem.EncodingType.Base64 });
          // Save the image to the local gallery
          console.log(`Image saved to: ${fileUri}`);
          // if (status === 'granted') {
          MediaLibrary.createAssetAsync(fileUri);
          ToastAndroid.show('ID has been downloaded!', ToastAndroid.SHORT);
          // alert("ID has been downloaded.")
          // }
        } catch (error) {
          console.error(error);
        }
      })
    }
    else {
      alert("No ID found!")
    }
  }
  async function downloadImage(dataUri) {

  }

  const MainContainer = styled.View`
    background-color: white;
    height: 100%;
    width: 100%;
  `;

  const UpperContainer = styled.View`
    height: 30%;
    width: 100%;
  `;

  return (
    <View style={{ backgroundColor: "white" }}>
      <UpperContainer style={styles.upper}>
        <View
          style={{
            flexDirection: "row",
            marginTop: "40%",
            maxHeight: 25,
            marginLeft: "20%",
            marginRight: "20%",
            marginBottom: "5%"
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: 'flex-start' }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="chevron-back" size={25} color="#F3DACC" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: '20%',
              color: "#F3DACC",
              fontWeight: "600",
              fontSize: 20
            }}
          >
            QR & Profile
          </Text>
        </View>
        <View
          style={{
            zIndex: 5,
            alignSelf: "center",
            height: 125,
            width: 125,
            borderWidth: 2,
            borderRadius: 100,
            marginBottom: "4%",
            borderColor: "#311E15",
          }}
        >
          <Avatar.Image size={120} source={require("../assets/person.jpg")} />
        </View>
      </UpperContainer>
      <MainContainer style={{ marginTop: "5%" }}>
        <View style={{ marginTop: "15%" }}>
          <Text
            style={{
              color: "#311E15",
              fontSize: 25,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            Saurabh Powar
          </Text>
          <Text
            style={{
              color: "#8B6C5B",
              fontSize: 18,
              fontWeight: "400",
              alignSelf: "center",
              margin: 7,
            }}
          >
            {" "}
            Roll No. 191060053{" "}
          </Text>
        </View>
        {status == 1 ? (
          <View
            style={{
              backgroundColor: "green",
              borderWidth: 1,
              borderRadius: 50,
              borderColor: "green",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 2,
                alignSelf: "center",
              }}
            >
              {" "}
              ID Active{" "}
            </Text>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{
                backgroundColor: "red",
                borderWidth: 1,
                borderRadius: 50,
                borderColor: "red",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  alignSelf: "center",
                }}
              >
                {" "}
                ID Expired{" "}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F3DACC",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#311E15",
                alignSelf: "center",
                marginLeft: 10
              }}
              activeOpacity={0.5}
              onPress={() => { }}
            >
              <Text
                style={{
                  color: "#311E15",
                  fontSize: 14,
                  fontWeight: '500',
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  alignSelf: "center",
                }}
              >
                {" "}
                📑️ Upload Fees Proof {" "}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ alignSelf: "center", marginTop: "4%" }}>
          <QRCode
            size={200}
            // value={QRTextValue ? QRTextValue : 'NA'}
            logo={require("../assets/qr_logo.png")}
            logoBackgroundColor="transparent"
            value="Lodu Utsav 191060052 12012023"
            getRef={(qr) => {
              qr_ref = qr
            }}
          />
        </View>
        <View
          style={{ alignSelf: "center", marginTop: 15, flexDirection: "row" }}
        >
          <Text
            style={{
              color: "#311E15",
              fontSize: 16,
              fontWeight: "500",
              margin: 10,
            }}
          >
            Download VJTI Mess ID:
          </Text>
          <TouchableOpacity
            style={{}}
            activeOpacity={0.5}
            onPress={() => saveQrToDisk()}
          >
            <Feather name="download" size={35} color="#8B6C5B" />
          </TouchableOpacity>
        </View>
        <View style=
          {
            wantChicken ? { marginHorizontal: 20, marginTop: 20, backgroundColor: '#F3DACC', borderRadius: 14, height: '15%' } :
              { marginHorizontal: 20, marginTop: 20, backgroundColor: '#F3DACC', borderRadius: 14, height: '5%' }
          }>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
            <MaterialIcons name="dinner-dining" size={24} color="#311E15" style={{ paddingVertical: 10, marginLeft: 10 }} />
            <Text style={{
              color: "#311E15",
              fontSize: 14,
              fontWeight: "500",
              marginHorizontal: 5,
              paddingVertical: 14
            }}>
              Do you want Non-veg this Friday?
            </Text>
            <Switch
              trackColor={{ false: "#FFFFFF", true: "#FFFFFF" }}
              thumbColor={wantChicken ? "red" : "green"}
              value={wantChicken}
              onValueChange={(value) => {
                setWantChicken(value);
                if (!value) {
                  setChickenCount('');
                }
              }}
            />
          </View>

          {wantChicken && (
            <View style={{ marginHorizontal: 20 }}>
              <Text
                style={{
                  color: "#311E15",
                  fontSize: 14,
                  fontWeight: "500",
                  marginHorizontal: 5,
                }}
              >How many chicken pieces do you want?</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <CounterInput
                  style={{ width: "50%", height: 50, marginVertical: 10 }}
                  horizontal={true}
                  increaseButtonBackgroundColor={"#311E15"}
                  decreaseButtonBackgroundColor={"#311E15"}
                  minValue={0}
                  maxValue={10}
                  value={chickenCount}
                  onValueChange={setChickenCount}
                  error={chickenCount < 0}
                  errorText={'Value cannot be less than 0'}
                />
                <TouchableOpacity
                  style={{ backgroundColor: '#311E15', borderRadius: 10, height: 40, alignSelf: 'center', marginLeft: 5 }}
                  activeOpacity={0.5}
                  onPress={() => { }}
                >
                  <Text style={{
                    color: "#F3DACC",
                    fontSize: 14,
                    fontWeight: "500",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                  }}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: '#F3DACC', borderRadius: 10, borderWidth: 1, borderColor: '#311E15', height: 40, alignSelf: 'center', marginLeft: 5 }}
                  activeOpacity={0.5}
                  onPress={() => { setWantChicken(false) }}
                >
                  <Text style={{
                    color: "#311E15",
                    fontSize: 14,
                    fontWeight: "500",
                    paddingHorizontal: 10,
                    paddingVertical: 10
                  }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        {
          !wantChicken ? (
            <>
              <View style=
                {{ marginHorizontal: 20, marginTop: 15, backgroundColor: '#311E15', borderRadius: 14, height: '5%', alignSelf: 'center' }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginHorizontal: 5 }}
                  activeOpacity={0.5}
                  onPress={() => { }}
                >
                  <FontAwesome5 name="file-invoice" size={24} color="#F3DACC" style={{ paddingVertical: 10, marginLeft: 10 }} />
                  <Text style={{
                    color: "#F3DACC",
                    fontSize: 14,
                    fontWeight: "500",
                    paddingVertical: 14,
                    paddingHorizontal: 10
                  }}>
                    Generate and View Bill
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) :
            (
              <></>
            )
        }

      </MainContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  upper: {
    flexDirection: "column",
    width: "120%",
    marginLeft: "-10%",
    marginTop: "-30%",
    margin: "auto",
    borderRadius: 200,
    zIndex: 1,
    backgroundColor: "#311E15",
  },
});
