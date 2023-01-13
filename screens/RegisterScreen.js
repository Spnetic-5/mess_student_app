import {StatusBar} from 'expo-status-bar'
import React, {useLayoutEffect, useState} from 'react'
import {StyleSheet, View, Image, TouchableOpacity,TextInput, Keyboard} from 'react-native'
import {Text} from 'react-native-elements'

const RegisterScreen = ({navigation}) => {
  const [first, setFirstName] = useState('')
  const [last, setLastName] = useState('')
  const [messid, setMessId] = useState('')
  const [password, setPassword] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)

  useLayoutEffect(() => {
    Keyboard.dismiss();
    navigation.setOptions({
      headerBackTitle: 'Back to Login',
    })
  }, [navigation])

  const clearInputFields = () => {
    alert('Successfully Created Account')
    navigation.replace('Home')
    setSubmitLoading(false)
    setFullName('')
    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image
        style={{
          height: 250,
          resizeMode: 'contain'
        }}
        source={require('../assets/hostel_mess.png')}
      />
      <Text style={{color: '#311E15', marginTop: 25, marginBottom: 50, fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
        VJTI Mess Registration
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{color: '#000000', fontSize: 18, marginTop: 10}}
          placeholderTextColor={'#F3DACC'}
          placeholder='First Name'
          type='text'
          autoFocus
          value={first}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={{color: '#000000', fontSize: 18, marginTop: 20}}
          placeholderTextColor={'#F3DACC'}
          placeholder='Last Name'
          type='text'
          autoFocus
          value={last}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={{color: '#FFFFFF', fontSize: 18, marginTop: 20}}
          placeholderTextColor={'#F3DACC'}
          placeholder='Mess ID'
          type='text'
          value={messid}
          onChangeText={(text) => setMessId(text)}
        />
        <TextInput
          style={{color: '#FFFFFF', fontSize: 18, marginTop: 20}}
          placeholderTextColor={'#F3DACC'}
          placeholder='Password'
          type='text'
          
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={{flexDirection: 'row', marginTop: '5%'}}>
        <TouchableOpacity
          style={styles.add}
          loading={submitLoading}
        //   onPress={signUp}
        > 
        <Text style={{color: 'white', paddingHorizontal: 15, paddingVertical: 15, marginLeft: 15, fontSize: 16}}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          loading={submitLoading}
          onPress={() => navigation.navigate('Login')}
        > 
        <Text style={{color: '#311E15', paddingHorizontal: 15, paddingVertical: 15, marginLeft: 15, fontSize: 16}}> Cancel </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 20,
    marginTop: '-10%'
  },
  button: {
    width: 300,
    marginTop: 25,
  },
  add: {
    width: 120,
    backgroundColor: '#311E15',
    height: 50,
    borderRadius: 20,
  },
  cancel: {
    width: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderColor: '#311E15',
    borderWidth: 1,
    height: 50,
    borderRadius: 20,
    marginLeft: 30
  },
})