import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native';
import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';

export default function Registro({ navigation }: any) { // Añade navigation aquí
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');
  const [cedula, setCedula] = useState('');
  const [nick, setNick] = useState('');
  const [edad, setedad] = useState('')

  function guardar(nick: string, cedula: string, correo: string, password: string, edad: string) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        set(ref(db, 'usuarios/' + cedula), {
          nick: nick,
          cedula: cedula,
          correo: correo,
          pass: password,
          edad:edad,
        });

        Alert.alert("Mensaje", "Registro exitoso");
        limpiar();
        navigation.navigate("Welcome"); // Navega a Welcome
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
      });
  }

  function limpiar() {
    setCorreo('');
    setNick('');
    setPass('');
    setCedula('');
    setedad('');
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://cdn.vectorstock.com/i/1000v/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg" }}
        style={styles.img}></Image>
      <Text style={{ fontSize: 45, }}>Registro</Text>
      <TextInput placeholder='Ingrese correo'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        keyboardType='email-address'
        onChangeText={(texto) => setCorreo(texto)}
        value={correo}>
      </TextInput>

      <TextInput placeholder='Ingrese contraseña'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        secureTextEntry={true}
        onChangeText={(texto) => setPass(texto)}
        value={pass}></TextInput>

      <TextInput placeholder='Ingrese Nick'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        onChangeText={(texto) => setNick(texto)}
        value={nick}></TextInput>

       <TextInput placeholder='Ingrese Edad'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        onChangeText={(texto) => setedad(texto)}
        value={edad}></TextInput>

      

      <TextInput placeholder='Ingrese Cédula'
        style={styles.input}
        placeholderTextColor={'#ffe'}
        keyboardType='numeric'
        onChangeText={(texto) => setCedula(texto)}
        value={cedula}></TextInput>

      <Button title='Guardar'
        onPress={() => guardar(nick, cedula, correo, pass,edad)}></Button>
    </View>
  );
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
    fontSize: 25,
    width: '80%',
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
    color: '#0018A8',
  },
  img: {
    width: 100,
    height: 100,
  }
});
