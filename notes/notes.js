import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
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
    // const acc2 = {
    //     "2023-01-11": {
    //       "selected": true,
    //     },
    //     "2023-01-14": {
    //       "selected": true,
    //     },
    //     "2023-01-15": {
    //       "selected": true,
    //     },
    //   }
    return acc;
  }, {})

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        markingType={'custom'}
        markedDatesStyle={{
          selected: {backgroundColor: '#d90000'}
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default MyCalendar;
