import React from 'react'
import {StyleSheet, View} from 'react-native'
import {ListItem, Text, Divider} from 'react-native-elements'
import {FontAwesome5, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

const CustomTile = ({title, number, icon}) => {
  return (
    <>
      <View>
        <ListItem containerStyle={styles.container}>
          <ListItem.Content>
            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                <ListItem.Title
                style={{fontWeight: 'bold', fontSize: 18, color: '#311E15', marginRight: '5%',  textAlign: 'center'}}
                >
                {title}
                </ListItem.Title>
                {
                  icon !== 'food-turkey' ?
                  (<MaterialIcons name={icon} size={24} color='#311E15' style={{ alignSelf: 'center'}}/> ) :
                  (
                    <MaterialCommunityIcons name={icon} size={30} color='#311E15' style={{ alignSelf: 'center'}} />
                  )
                }
            </View>
            <ListItem.Subtitle style={{color: '#222222', alignSelf:'center', fontSize: 16}}>
              {number}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    </>
  )
}

export default CustomTile

const styles = StyleSheet.create({
  container:{
    borderRadius: 20, 
    width: 160,
    marginLeft: '5%', 
    alignItems: 'center',
  },
})
