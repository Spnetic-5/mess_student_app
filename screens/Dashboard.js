import React, {useEffect, useLayoutEffect, useState} from 'react'
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native'
import { Calendar } from 'react-native-calendars';
import CustomTile from '../components/CustomTile';
import {Text} from 'react-native-elements'
import {Ionicons} from '@expo/vector-icons'
import styled from 'styled-components/native';

const Dashboard = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
        title: 'Dashboard',
        })
    }, []);

    const [checks, setChecks] = useState({});

    const onDayPress = (day) => {
        const dateString = day.dateString;
        setChecks((prevChecks) => {
          return {
            ...prevChecks,
            [dateString]: !prevChecks[dateString]
          }
        });
    };

    const markedDates = Object.keys(checks).reduce((acc, date) => {
        acc[date] = { selected: checks[date] };
        console.log(acc);
        const acc2 = {
            "2023-01-11": {
              "selected": true,
               "selectedColor": 'green'
            },
            "2023-01-12": {
              "selected": true,
              "selectedColor": 'green'
            },
            "2023-01-09": {
              "selected": true,
              "selectedColor": 'green'
            },
          }
        return acc2;
    }, {})

    const MainContainer = styled.View`
        background-color: 'white';
        height: 100%;
        width: 100%;
        zIndex: -5;
    `;

    const UpperContainer = styled.View`
        background-color: #F9D7FF;
        height: 25%;
        width: 100%;
    `;

    return (
        <MainContainer>
            <UpperContainer style={styles.upper}>
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
            {/* <Text style={styles.attendance_text}>Mess Attendance</Text> */}
            <View style={{marginLeft: '4%', marginRight:'4%', marginTop: '9%'}}>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={markedDates}
                    markingType={'dot'}
                    style={styles.calendar}
                    theme={{
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#311E15',
                        selectedDayTextColor: '#311E15',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: '#311E15',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: '#311E15',
                        indicatorColor: '#311E15',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 18,
                        textDayHeaderFontSize: 16
                    }}
                />
            </View>
            <View style={styles.month_containers}>
                <CustomTile
                    title="Month's Expense"
                    number='4,500'
                    icon='money'
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
                    icon='food-turkey'
                />
            </View>
        </MainContainer>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    upper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '120%',
        marginLeft: '-10%',
        marginTop: '-15%', 
        margin: 'auto',
        borderRadius: 200,
        zIndex: -2,
        backgroundColor: '#311E15'
      },
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
        marginRight: '1%',
        marginLeft: '1%',
        borderColor:'#311E15',
        borderWidth: 2,
        borderRadius: 20
    },
    stat_containers: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: '3%',
        justifyContent: 'space-around',
        marginTop: '3%',
        maxHeight: '10%'
    },
    month_containers: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '1%',
        marginRight: '1%',
        justifyContent: 'space-around',
        marginTop: '3%',
        marginBottom: '4%',
        maxHeight: '10%',
    },
    calendar: {
        marginTop: '4%',
    },
})
