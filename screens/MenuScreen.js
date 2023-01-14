import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
// import {SafeAreaView} from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import { Text } from 'react-native-elements'
import { FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import MenuTile from '../components/MenuTile';
import axios from 'axios';
import { host } from "../ip";
// import { Separator } from 'native-base';

const MenuScreen = ({ route, navigation }) => {

  const { sid } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All Entries',
    })
  }, [])

  const MainContainer = styled.View`
    background-color: 'white';
    height: 100%;
    width: 100%;
    zIndex: -5;
  `;

  const UpperContainer = styled.View`
    background-color: #311E15;
    height: 20%;
    width: 100%;
    border-radius: 20;
    zIndex: 5;
  `;

  const list = [
    {
      id: 1,
      title: 'Monday',
      breakfast: "Pohe, Bananas",
      lunch: "Chavli Bhaji, Varan Bhaat",
      dinner: "Flower Bhaji, Varan Bhaat"
    },
    {
      id: 2,
      title: 'Tuesday',
      breakfast: "Idli Sambhar",
      lunch: "Matki Usal, Varan Bhaat",
      dinner: "Palak Paneer"
    },
    {
      id: 3,
      title: 'Wednesday',
      breakfast: "Bread Pakoda",
      lunch: "Egg Curry, Cabbage",
      dinner: "Doodhi Bhopala"
    },
    {
      id: 4,
      title: 'Thursday',
      breakfast: "Sabudana Wada, Maggi",
      lunch: "Batata Bhaji",
      dinner: "Flower Bhaji, Varan Bhaat"
    },
    {
      id: 5,
      title: 'Friday',
      breakfast: "Medu Wada",
      lunch: "Chicken, Usal",
      dinner: "Palak Paneer"
    },
    {
      id: 6,
      title: 'Saturday',
      breakfast: "Dosa Sambhar",
      lunch: "Aloo Gobi",
      dinner: "Chavli Bhaji, Varan Bhaat"
    },
    {
      id: 7,
      title: 'Sunday',
      breakfast: "Misal Pav",
      lunch: "Pav Bhaji",
      dinner: "Egg Curry"
    }
  ]

  const head = (item) => {
    return (
      <View style={styles.head_container}>
        <Text style={{ fontSize: 25, flex: 7 }}>{item.title}</Text>
        <Entypo name="chevron-down" size={30} color="black" style={{ flex: 1, }} />
      </View>
    );
  }

  useEffect(() => {
    axios
      .get(`${host}/api/setting/menu`)
      .then((response) => {
        // console.log(response);
        // setStudent(response?.data?.student);
        // console.log(student.balance)
        // {"__v": 0, "_id": "63c1d5ed366249ee2b6f908f", "balance": 0, "expense": 0, 
        // "fcmToken": "token", "firstName": "Chai", "lastName": "Chai", "password": "25", "sid": "25", "status": "pending"}
      })
      .catch((error) => console.log(error));
  }, []);

  const body = (item) => {
    return (
      <View style={styles.body_container}>
        <MenuTile
          title='Breakfast'
          menu={item.breakfast}
          image={0}
        />
        <MenuTile
          title='Lunch'
          menu={item.lunch}
          image={1}
        />
        <MenuTile
          title='Dinner'
          menu={item.dinner}
          image={2}
        />
      </View>
    );
  }

  return (
    <MainContainer>
      <UpperContainer>
      </UpperContainer>
      <View
        style={{ flexDirection: 'row', marginLeft: '10%', marginTop: '-20%', zIndex: 5 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home', { sid: sid })}
        >
          <Ionicons name="chevron-back" size={25} color="#F3DACC" />
        </TouchableOpacity>

        <Text style={{ color: '#F3DACC', fontWeight: 'bold', fontSize: 24, flex: 1, textAlign: 'center', marginRight: '15%' }}>
          Week's Menus
        </Text>
      </View>
      <AccordionList
        list={list}
        header={head}
        body={body}
        keyExtractor={item => `${item.id}`}
        style={styles.accordian_container}
      />
    </MainContainer>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    marginTop: '6%',
    height: '100%',
    flex: 1,
    // paddingTop: '5%'
  },
  containerNull: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accordian_container: {
    marginTop: '20%'
  },
  head_container: {
    marginLeft: '7%',
    marginRight: '7%',
    height: 60,
    marginBottom: '3%',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F3DACC',
    flex: 1,
    paddingTop: '4%',
    borderRadius: 20,
    paddingLeft: '7%',
    paddingRight: '4%',
    elevation: 100,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  body_container: {
    marginLeft: '7%',
    marginRight: '7%',
    backgroundColor: '#F3DACC',
    marginBottom: '4%',
    marginTop: '-7%',
    height: 350,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: '5%'
  }
})
