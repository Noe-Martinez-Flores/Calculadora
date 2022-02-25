import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ScreenResults from './ScreenResults';

export default function  CalculateButton({calcular, navigation, nombre, edad, peso, altura, imc}) {
  console.log(imc);
  
  return (
    <View style = {styles.down}>
        <Button title='Calcular' onPress={calcular(),() => navigation.navigate("result", {
          nombre : nombre,
          edad : edad,
          peso : peso,
          altura : altura,
          imc : imc
        })} style = {styles.button}></Button>
    </View>
  )
}

const styles = StyleSheet.create ({
  down : {
    position : 'absolute',
    bottom : 15,
    width : "100%",
    alignItems : 'center',
    justifyContent : 'center'
  },  
  button : {
    padding : 15,
    borderRadius : 25,
    width: "75%" ,
    color: "white",
    textAlign : 'center'
  },
});
