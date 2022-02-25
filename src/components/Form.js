import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'


export default function Form(props) {
    // console.log(props);
    const {nombre, edad, peso, altura} = props;
  return (
    <View style = {styles.viewStyles}> 
        <TextInput style = {styles.inputStyles} placeholder = "Nombre" onChange={(e) => nombre(e.nativeEvent.text)} ></TextInput>
        <TextInput style = {styles.inputStyles} placeholder = "Edad" keyboardType='numeric' onChange={(e) => edad(e.nativeEvent.text)}></TextInput>
        <TextInput style = {styles.inputStyles} placeholder = "Peso (Kg)" keyboardType='numeric' onChange={(e) => peso(e.nativeEvent.text)}></TextInput>
        <TextInput style = {styles.inputStyles} placeholder = "Altura (m)" keyboardType='numeric' onChange={(e) => altura (e.nativeEvent.text)} ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create ({
    inputStyles : {
        height : 50,
        color : 'black',
        marginBottom : 15,
        width : "50%",
        borderRadius : 15,
        borderColor : '#14153E',
        backgroundColor : '#EAEEF5'
    },
    viewStyles : {
        marginBottom : 10,
        alignItems : 'center',
        
    },

})
