import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {ListItem, Text, Divider} from 'react-native-elements'

const MenuTile = ({title, menu, image}) => {
  const imageList = {
    0: require('../assets/breakfast.png'),
    1: require('../assets/lunch.png'),
    2: require('../assets/dinner.png')
  }
  return (
    <>
      <View>
        <ListItem containerStyle={styles.container}>
            <ListItem.Content>
                <ListItem.Title
                style={{fontWeight: 'bold', fontSize: 18, color: '#311E15'}}
                >
                {title}
                </ListItem.Title>
                <ListItem.Subtitle style={{color: '#222222'}}>
                {menu}
                </ListItem.Subtitle>
            </ListItem.Content>
            <View> 
                <Image 
                    style={styles.image_container} 
                    source={imageList[image]}>
                </Image>
            </View>
        </ListItem>
      </View>
    </>
  )
}

export default MenuTile

const styles = StyleSheet.create({
  container:{
    borderRadius: 20, 
    width: '85%', 
    // height: '50%',
    marginLeft: '7.5%', 
    justifyContent: 'center',
    // backgroundColor:'pink',
    marginBottom: '2%',
    elevation: 50,
    shadowColor: '#AAA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image_container: {
    resizeMode: 'contain', 
    height: 75, 
    width: 100, 
    alignSelf:'flex-end', 
    marginLeft: '5%', 
    marginTop: '-7%'
  }
})
