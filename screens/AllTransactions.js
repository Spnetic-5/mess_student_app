import React, {useEffect, useLayoutEffect, useState} from 'react'
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
// import {SafeAreaView} from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
import {Text} from 'react-native-elements'
import {FontAwesome5, Ionicons, Entypo} from '@expo/vector-icons'
import styled from 'styled-components/native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
// import { Separator } from 'native-base';

const AllTransactions = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All Entries',
    })
  }, [])
  // const [transactions, setTransactions] = useState([])
  // useEffect(() => {
  //   const unsubscribe = db
  //     .collection('expense')
  //     .orderBy('timestamp', 'desc')
  //     .onSnapshot((snapshot) =>
  //       setTransactions(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     )

  //   return unsubscribe
  // }, [])
 
  // useEffect(() => {
  //   if (transactions) {
  //     setFilter(
  //       transactions.filter(
  //         (transaction) => transaction.data.email === auth.currentUser.email
  //       )
  //     )
  //   }
  // }, [transactions])

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
          id:1,
          title: 'Breakfast',
          body: "['Poha', 'Upma']"
        },
        {
          id:2,
          title: 'Lunch',
          body: "['Poha', 'Upma']"
        },
        {
          id:3,
          title: 'Dinner',
          body: "['Poha', 'Upma']"
        }
    ]
  
  const head = (item) =>{
      return(
          <View style={styles.head_container}>
            <Text style={{fontSize: 25, flex: 7}}>{item.title}</Text>
            <Entypo name="arrow-with-circle-down" size={30} color="black" style={{flex: 1,}}/>
          </View>
      );
  }
  
  const body = (item) => {
      return (
          <View>
            <Text>{item.body}</Text>
          </View>
      );
  }

  return (
    <MainContainer>
       <UpperContainer>
      </UpperContainer>
      <View 
      style={{flexDirection: 'row', marginLeft: '10%', marginTop: '-20%', zIndex: 5}}>
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="chevron-back" size={25} color="#F3DACC" />
        </TouchableOpacity>

        <Text style={{color: '#F3DACC', fontWeight: 'bold', fontSize: 24, flex:1, textAlign:'center', marginRight:'15%' }}>
          Week's Menus
        </Text>
      </View>
      <Text>Jjc</Text>
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

export default AllTransactions

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    marginTop: '10%',
    height: '100%',
    flex: 1,
    paddingTop: '5%'
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
    // justifyContent: 'center',
    flexDirection: 'row',
    // alignSelf: 'space-between'
  }
})
