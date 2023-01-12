import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg'
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export default function QRScanner() {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);
  const [qrData, setqrData] = useState(null);

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
    <View style={{backgroundColor: 'white'}}>
      <UpperContainer style={styles.upper}>
      <View
          style={{
            flexDirection: "row",
            marginTop: "40%",
            maxHeight: 25,
            marginLeft: "20%",
            marginRight: "20%",
            marginBottom: "5%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="chevron-back" size={25} color="#F3DACC" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#F3DACC",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: "30%",
            }}
          >
            Profile
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
      <MainContainer style={{marginTop: '5%'}}>
      {/* <Text style={{alignSelf: 'center', color: '#311E15', fontSize: 18}} color='#F3DACC'> Please Wait! </Text>
      <Text style={{alignSelf: 'center', color: '#311E15', fontSize: 20, fontWeight: '500', marginBottom: '4%'}} color='#F3DACC'> Scanning the QR Code . . . </Text>
      <ActivityIndicator size="large" color="#8B6C5B" style={{marginBottom: '8%'}}/> */}
      <View style={{marginTop: '15%'}}>
        <Text style={{color: '#311E15', fontSize: 25, fontWeight: '600', alignSelf: 'center'}}> Saurabh Powar </Text>
        <Text style={{color: '#8B6C5B', fontSize: 18, fontWeight: '400', alignSelf: 'center', margin: 7}}> Roll No. 191060053 </Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: '5%'}}>
        <QRCode
          size={200}
          // value={QRTextValue ? QRTextValue : 'NA'}
          logo={require('../assets/qr_logo.png')}
          logoSize={50}
          logoBackgroundColor='transparent'
          value= "Lodu Utsav 191060052 12012023"
        />
      </View>
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