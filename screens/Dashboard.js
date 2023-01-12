import React, {useEffect, useLayoutEffect, useState} from 'react'
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import SafeAreaView from 'react-native-safe-area-view'
import CustomListItem from '../components/CustomListItem'
import CustomTile from '../components/CustomTile';
import {Text} from 'react-native-elements'
import {FontAwesome5, Ionicons} from '@expo/vector-icons'
import styled from 'styled-components/native';

const Dashboard = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Dashboard',
    })
  }, []);

  const [selectedStartDate, setSelectedStartDate] = useState(null)

  const MainContainer = styled.View`
    background-color: 'white';
    height: 100%;
    width: 100%;
    zIndex: -5;
  `;

  const UpperContainer = styled.View`
    background-color: #311E15;
    height: 18%;
    width: 100%;
    border-radius: 30;
    zIndex: 5;
  `;

  return (
    <MainContainer>
        <UpperContainer>
        </UpperContainer>
        <View 
            style={{flexDirection: 'row', marginLeft: '10%', marginTop: '-18%', zIndex: 5}}>
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Home')}
        >
            <Ionicons name="chevron-back" size={25} color="#F3DACC" />
        </TouchableOpacity>
        <Text style={{color: '#F3DACC', fontWeight: 'bold', fontSize: 24, flex:1, textAlign:'center', marginRight:'15%' }}>
            Dashboard
        </Text>
        </View>
        <Text style={styles.attendance_text}>Mess Attendance</Text>   
        <View style={styles.container}> 
            <CalendarPicker
                startFromMonday={true}
                showDayStragglers={true}
                selectedDayColor='#311E15'
                selectedDayTextColor='white'
                todayBackgroundColor='#311E15'
            />
        </View>
        <View style={styles.stat_containers}>
            <CustomTile
                title='Total Meals'
                number='23'
                icon='restaurant-menu'
            />
            <CustomTile
                title='Total Guests'
                number='4'
                icon='person'
            />
        </View>
        <View style={styles.stat_containers}>
        <CustomTile
            title='Total Extra Dishes'
            number='3'
            icon='set-meal'
        />
        </View>
    </MainContainer>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    attendance_text:{
        fontSize:22,
        marginTop:'15%',
        alignSelf:'center',
        color: '#311E15',
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#F3DACC',
        marginTop: '5%',
        paddingRight: '4%',
        paddingLeft:'4%',
        // marginRight: '2%',
        // marginLeft: '2%',
        // borderColor:'#311E15',
        // borderWidth: 2,
        borderRadius: 20
    },
    stat_containers: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: '3%',
        justifyContent: 'space-around',
        marginTop: '5%',
        // backgroundColor: 'pink',
        maxHeight: '10%'
    }
})
