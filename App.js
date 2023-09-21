import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [rates, setRates] = useState({});
  const [selected, setSelected] = useState('');
  const [amount, setAmount] = useState('');
  const [eur, setEur] = useState('');

  const APIL_API_KEY = process.env.EXPO_PUBLIC_APIL_API_KEY; 

<<<<<<< HEAD
  const getData = async () => {
    const url = `https://api.apilayer.com/exchangerates_data/latest`;
    const options = {
      headers: {
        apikey: APIL_API_KEY
      }
    };
=======
  // Valuuttojen haku
  const myHeaders = new Headers();
>>>>>>> e766a1fa18be8f39e9409f8d9b7dfaacfa54f8b9

    try {
      const response = await fetch(url, options);
      console.log('Response status', response.status);
      const currencyData = await response.json();
      console.log(currencyData);
      setRates(currencyData.rates);
    } catch (e) {
      Alert.alert('Error fetching data');
    }
  }

  useEffect(() => { getData() }, []);

  const convert = () => {
    const amountEur = Number(amount) / rates(selected);
    setEur(`${amountEur.toFixed(2)}€`);
  }

  return (
    <View style={styles.container}>
      <Image style={{ width: 200, height: 200 }}
        source={require('.currency.jpg')}
      />
      <Text style={{ ...styles.valuerow, ...styles.text }}>{eur}</Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={'Amount'}
          keyboardType='number-pad'
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <Picker style={styles.picker}
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue, itemIndex);
            setSelected(itemValue);
          }}
        >
          {Object.keys(rates).sort().map(key => (<Picker.Item label={key} value={key} key={key} />))}
        </Picker>
      </View>
      <Button 
        title='Convert'
        onPress={convert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, valuerow: {
    paddingRight: 20,
  }, textInput: {
    flexDirection: 'row',
    height: 50,
  }, picker: {
    width: 120
  }, text: {
    fontSize: 16
  }
});
