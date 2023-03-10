import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Text } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import MenuTile from "../components/MenuTile";
import styled from "styled-components/native";
import { host } from "../ip";

const HomeScreen = ({ route, navigation }) => {
  console.log(route.params);
  const { sid } = route.params;
  const [monthExpense, setMonthExpense] = useState(0);

  const [student, setStudent] = useState({
    firstName: "Chaitravi",
    lastName: "Chalke",
    balance: 20000,
  });

  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const [filter, setFilter] = useState([
    { id: "1", data: "Saurabh Powar", rollno: "191060053", time: "14:23" },
    { id: "2", data: "Saurabh Powar", rollno: "191060058", time: "12:40" },
  ]);

  const [date, setDate] = useState(null);

  let today = new Date();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    let date =
      today.getDate() +
      " " +
      months[today.getMonth() + 1] +
      " " +
      today.getFullYear();
    setDate(date);
  }, []);

  useEffect(() => {
    axios
      .get(`${host}/api/student/${sid}`)
      .then((response) => {
        // console.log(response);
        setStudent(response?.data?.student);
        // console.log(student.balance)
        // {"__v": 0, "_id": "63c1d5ed366249ee2b6f908f", "balance": 0, "expense": 0, 
        // "fcmToken": "token", "firstName": "Chai", "lastName": "Chai", "password": "25", "sid": "25", "status": "pending"}
      })
      .catch((error) => console.log(error));
  }, [sid]);

  useEffect(() => {
    axios
      .get(`${host}/api/setting/menu`)
      .then((response) => {
        setBreakfast(response.data[days[today.getDay()-1]]["breakfast"]["dish"]);
        setLunch(response.data[days[today.getDay()-1]]["lunch"]["dish"]);
        setDinner(response.data[days[today.getDay()-1]]["dinner"]["dish"]);
      })
      .catch((error) => console.log(error));

        axios
        .get(`${host}/api/student/bill/${sid}/${today.getMonth()}`)
        .then((response) => {
          setMonthExpense(response.data.expense);
      //    console.log(response.data.expense);
        })
        .catch((error) => console.log(error));
  }, [monthExpense, student.balance, sid]);

  const MainContainer = styled.View`
    background-color: white;
    height: 100%;
    width: 100%;
  `;

  const UpperContainer = styled.View`
    background-color: red;
    height: 30%;
    width: 100%;
    border-radius: 10;
  `;

  return (
    <>
      {/* <View style={styles.container}> */}
      <StatusBar style="light" />
      <MainContainer>
        <UpperContainer style={styles.upper}>
          <View style={styles.fullName}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: "2%",
                    color: "#F3DACC",
                  }}
                >
                  Welcome ???????,
                </Text>
                <Text
                  style={{ fontSize: 25, fontWeight: "600", color: "#FFFFFF" }}
                >
                  {student?.firstName} {student?.lastName}
                </Text>
              </View>
              <Image
                style={{
                  resizeMode: "contain",
                  height: 120,
                  width: 120,
                  alignSelf: "flex-end",
                  marginLeft: "5%",
                  marginTop: "-7%",
                }}
                source={require("../assets/eating_student.png")}
              ></Image>
            </View>
          </View>
        </UpperContainer>
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={{ flexDirection: "row", marginTop: "2%" }}>
              <Ionicons name="calendar" size={24} color="#311E15" />
              <Text
                style={{
                  marginLeft: "5%",
                  marginTop: 2,
                  color: "#311E15",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {days[today.getDay()]}
              </Text>
              <Text
                style={{
                  marginLeft: "5%",
                  marginTop: 2,
                  color: "#311E15",
                  fontSize: 18,
                }}
              >
                {date}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: "4%" }}>
                <Text
                  style={{ color: "#311E15", fontWeight: "600", fontSize: 20 }}
                >
                  Deposit Balance
                </Text>
                {/* <Ionicons name='people' size={24} color='#311E15' style={{marginLeft: '2%'}}/> */}
                <Fontisto
                  name="wallet"
                  size={22}
                  color="#311E15"
                  style={{ marginLeft: "2%" }}
                />
            </View>
            <View style={{ flexDirection: "row"}}>
              <Text h3 style={{ color: "#311E15", marginTop: 10 }}>
                {student.balance - monthExpense}
              </Text>
              <Text h6 style={{ color: "#311E15", marginTop: '8%', marginLeft: 5 }}>
                {"("} {monthExpense} {")"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.menu_text}>Today's Menu </Text>
          <MaterialCommunityIcons name="chef-hat" size={32} color="#311E15" />
        </View>
        <ScrollView style={{ marginTop: "2%" }}>
          <MenuTile
            title="Breakfast"
            menu={breakfast}
            image={0}
          />
          <MenuTile
            title="Lunch"
            menu={lunch}
            image={1}
          />
          <MenuTile
            title="Dinner"
            menu={dinner}
            image={2}
          />
        </ScrollView>
        <View style={styles.addButton}>
          <TouchableOpacity
            style={{ marginLeft: "-10%" }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Dashboard", { sid: sid })}
          >
            {/* <Ionicons name='ios-home' size={30} color='#FFFFFF' /> */}
            <Ionicons
              name="ios-stats-chart-outline"
              size={28}
              color="#FFFFFF"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: "-10%" }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Menu", { sid: sid })}
          >
            <MaterialIcons name="restaurant-menu" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "white",
            alignSelf: "center",
            top: "85%",
            position: "absolute",
          }}
        >
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => navigation.navigate("QRGen", {sid: sid})}
            activeOpacity={0.5}
          >
            <Ionicons name="md-qr-code-outline" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </MainContainer>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },

  menu_text: {
    fontSize: 26,
    // textAlign: 'center',
    marginTop: "4%",
  },

  fullName: {
    flex: 1,
    marginTop: "20%",
    marginLeft: "15%",
  },

  upper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "120%",
    marginLeft: "-10%",
    marginTop: "-5%",
    margin: "auto",
    borderRadius: 100,
    backgroundColor: "#311E15",
  },

  card: {
    backgroundColor: "#F3DACC",
    width: "85%",
    height: "20%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
    marginLeft: "7.5%",
    marginTop: "-15%",
  },

  cardTop: {
    marginBottom: 20,
    alignItems: "center",
    margin: "4%",
  },

  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginLeft: "5%",
    marginBottom: "5%",
  },

  cardBottomSame: {
    flexDirection: "row",
  },

  recentTitle: {
    marginLeft: "10%",
    marginTop: "8%",
  },

  recentTransactions: {
    backgroundColor: "white",
    width: "100%",
  },

  seeAll: {
    fontWeight: "bold",
    color: "#ECC2FF",
    fontSize: 14,
    marginLeft: "30%",
  },

  addButton: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    height: "8%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: "#311E15",
  },

  plusButton: {
    backgroundColor: "#4A2511",
    padding: 20,
    height: 75,
    width: 75,
    top: "12%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 50,
    marginBottom: 5,
  },

  containerNull: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
    width: "80%",
    height: "30%",
    alignItems: "center",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },

  containerScroll: {
    backgroundColor: "white",
    padding: 0,
    height: "100%",
    flex: 1,
  },
});

{
  /* <Modal
animationType='slide'
transparent={true}
visible={reset}
onRequestClose={() => {
  alert('Modal has been closed.')
  setReset(false)
}}
>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Image
    style={{
      width: '40%',
      top: '-40%',
      resizeMode: 'contain'
    }}
    source={require('../assets/alert.png')}
  />
  <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center',top: '-80%', color: '#222222'}}>
    Are you sure you want to reset all the Transactions?
  </Text>
  <View style={{flexDirection: 'row', marginLeft: '10%', marginTop: '-60%' ,marginBottom: '2%'}}>
    <Button
      buttonStyle={styles.yes}
      title='No'
      onPress={() => setReset(false)}
    />
    <Button
      buttonStyle={styles.no}
      title='Yes'
      color='#FFFFFF'
      // onPress={delAll}
    />
  </View>
</View>
</View>
</Modal> */
}
