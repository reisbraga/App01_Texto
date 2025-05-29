import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const logo = require('./assets/caderno.png');

  function maiusculo(texto: any) {
    let resultado = texto.toUpperCase();
    setResultado(resultado);
    console.log(resultado);
  }

  function minusculo(texto: any) {
    let resultado = texto.toLowerCase();
    setResultado(resultado);
    console.log(resultado);
  }

  function inverter(texto: any) {
    let resultado = texto.split('').reverse().join('');
    setResultado(resultado);
    console.log(resultado);
  }

  function contador(texto: any) {
    let resultado = texto.length;
    setResultado(''+resultado);
    console.log(resultado);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 50, height: 50}}></Image>
      <Text style={styles.titulo}>Transformador de Texto</Text>

      <TextInput onChangeText={setTexto} 
      style={styles.textInput} 
      placeholder='Digite um texto: '
      value={texto}
      />

      <Button onPress={() => maiusculo(texto) } title='Maiúsculo' color='#3366ff' />
      <Button onPress={() => minusculo(texto) } title='Minúsculo' color='#3366ff' />
      <Button onPress={() => inverter(texto) } title='Inverter' color='#3366ff' />
      <Button onPress={() => contador(texto) } title='Contador' color='#3366ff' />
      <Text>Texto alterado: {resultado}</Text>
    </View>
  );
}


/* css dos componentes do aplicativo */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
  },

  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 100,
    width: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10, 
  }
});