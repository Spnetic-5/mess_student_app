import React, {useEffect, useLayoutEffect, useState} from 'react'
import {StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, Image, TextInput} from 'react-native'
import {Text} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)

  const signIn = () => {
    navigation.replace('Home')
    // if (email && setEmail) {
    //   setSubmitLoading(true)
    //   auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(() => clearInputFields())
    //     .catch((error) => alert(error.message) & setSubmitLoading(false))
    // } else {
    //   alert('All fields are mandatory')
    //   setSubmitLoading(false)
    // }
    
  }
  // const clearInputFields = () => {
  //   // alert('Successfully Logged in')
  //   navigation.replace('Home')
  //   setSubmitLoading(false)
  //   setEmail('')
  //   setPassword('')
  // }

  const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         navigation.replace('Home')
//         setLoading(false)
//       } else {
//         setLoading(false)
//       }
//     })
//     return unsubscribe
//   }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Loading...',
    })
    if (!loading) {
      navigation.setOptions({
        title: 'Login',
      })
    }
  }, [navigation, loading])

  return (
    <>
      {!loading ? (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <StatusBar style='light' />
          <Image
            style={{
              height: 500,
              top: '-7%',
              resizeMode: 'contain',
              padding: '5%',
              marginTop: '3%'
            }}
            source={require('../assets/hostel_mess.png')}
          />
          <View style={{alignItems: 'center', top: '-10%'}}>
            <Text style={{fontSize: 26, fontWeight: '700', color: '#311E15',}}> VJTI Mess </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={{color: '#311E15', fontSize: 18, marginTop: 10, borderWidth: 1, borderRadius: 10, height: 40, padding: 10, borderColor: '#311E15'}}
                type='email'
                placeholder='Mess ID'
                placeholderTextColor={'#311E15'}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                type='password'
                style={{color: '#000000', fontSize: 18, marginTop: 15, marginBottom: 10, borderWidth: 1, borderRadius: 10, height: 40, padding: 10, borderColor: '#311E15'}}
                secureTextEntry
                placeholder='Password'
                placeholderTextColor={'#311E15'}
                value={password}
                onChangeText={(text) => setPassword(text)}
                // onSubmitEditing={signIn}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: '-2%'}}>
              <TouchableOpacity
                style={styles.add}
                loading={submitLoading}
                onPress={signIn}
              > 
              <Text style={{color: 'white', padding: 15, marginLeft: 20}}> Login </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => navigation.navigate('Register')}
              >
              <Text style={{color: '#000000', padding: 15, marginLeft: 15}}> Register </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.container}>
          <StatusBar style='light' />
          {/* <Image
            source={{
              uri:
                'https://static-s.aa-cdn.net/img/gp/20600011886807/to-aGJ31KLwqc9AWaBUyL6NLbpFwN9VEliX7nQ_AU48aO4jH6M1MltWKmThWJPndJg=s300?v=1',
            }}
            style={{width: 100, height: 100, marginBottom: 50}}
          /> */}
          <Text h4>Loading...</Text>
        </View>
      )}
    </>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 20,
  },
  add: {
    width: 120,
    backgroundColor: '#311E15',
    height: 50,
    borderRadius: 20
  },
  cancel: {
    width: 120,
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 20,
    borderColor: '#402243',
    borderWidth: 1,
    color: '#402243',
    marginLeft: 30
  },
})