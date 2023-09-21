import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [base, setBase] = useState('');
  const [symbols, setSymbols] = useState('');
  const [repositories, setRepositories] = useState([]);



  // Valuuttojen haku
  const myHeaders = new Headers();
  myHeaders.append("apikey", "MyLyO6nlK1OD37UtVRirP7zykioxN416");

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    setRepositories(result);

  //ArrayList
  const object1 = {
  };

  console.log(Object.keys(object1));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='EUR'
        keyboardType='number-pad'
        value={base}
        onChangeText={text => setBase(text)}
      />
      <View style={styles.picker}>
        <Picker>
          <Picker.Item value={symbols} />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title='Convert'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }, textInput: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'lightgrey',
    width: '40%',
  }, picker: {
    borderWidth: 1,
    width: '30px',
    padding: 5,
    backgroundColor: 'lightgrey',
    width: '30%',
  }, button: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
