import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import CalculateButton from './CalculateButton'
import Form from './Form'

export default function Home(props) {
    //console.log(props);
    const {navigation} = props;

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState(0);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    

    // console.log(edad)
    // console.log(peso)
    // console.log(altura)

    const calculateImc = () => {
       if ( altura!=null && peso!=null && nombre!=null && edad!=null){
        setImc(peso / (Math.pow(altura,2))) 
        }
    } 
    
  return (
    <>
    <StatusBar barStyle = "dark-content"/>
      <SafeAreaView style = {styles.safeArea}>
        <View style = {styles.background}></View>
        <Text style = {styles.textCalIMC}> Calculadora IMC</Text>
      </SafeAreaView>
      <Form nombre = {setNombre} edad = {setEdad} peso = {setPeso} altura = {setAltura}/>
      
      <CalculateButton calcular = {calculateImc} navigation={navigation} nombre={nombre} edad = {edad} peso = {peso} altura = {altura} imc = {imc}></CalculateButton>
    </>
  )
}


const styles = StyleSheet.create({
    safeArea : {
      height: 150,
      alignItems : 'center',
    },
    background : {
      backgroundColor : "#228DD4",
      height: 100,
      width : "100%",
      borderBottomEndRadius : 50,
      borderBottomLeftRadius : 50,
      position : 'absolute',
      zIndex : -1,
    },
    textCalIMC : {
      color : "white",
      fontSize : 30,
      textAlign : 'justify',
      marginTop : 20,
    },
    backgroundScreen : {
     
    }
  });
