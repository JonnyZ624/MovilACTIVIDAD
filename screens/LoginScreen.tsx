import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function LoginScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a la aplicación!</Text>
      <Text style={{ fontSize: 20, }}>Usted a entrado al sistema con exito</Text>
      <Button title='Inicio' onPress={() => navigation.navigate('Welcome')}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCD4E6',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
