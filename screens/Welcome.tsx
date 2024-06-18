import { StyleSheet, Text, TextInput, View, Image, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Registro from './Registro';

export default function Welcome({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      });
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://w7.pngwing.com/pngs/583/54/png-transparent-web-development-responsive-web-design-web-application-web-application-blue-search-engine-optimization-web-design.png" }}
        style={styles.img}></Image>
      <Text style={{ fontSize: 45, }}>Aplicacion Web</Text>
      <TextInput 
        placeholder='Ingrese Usuario si tiene cuenta'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        keyboardType='email-address'
        onChangeText={(texto) => setCorreo(texto)}
        value={correo}
      ></TextInput>

      <TextInput 
        placeholder='Ingrese password'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        secureTextEntry={true}
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      ></TextInput>

      <View style={styles.buttonContainer}>
        <Button title='Iniciar Sesión' onPress={handleLogin}></Button>

        <Button title='Registrarse' onPress={() => navigation.navigate('Registro')}></Button>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#BCD4E6',
    height: 60,
    fontSize: 20,
    width: '80%',
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
    color: '#0018A8',
  },
  img: {
    width: 250,
    height: 150,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
