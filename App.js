
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView, StatusBar } from 'react-native';

import HomeStack from './src/navigation/HomeStack';



export default function App(props) {


  // const [nombre, setNombre] = useState(null);
  // const [edad, setEdad] = useState(null);
  // const [altura, setAltura] = useState(0);
  // const [peso, setPeso] = useState(0.0);


  // console.log("Nombre ->" + nombre);

  // console.log("Edad ->" + edad);
  
  // console.log("Peso ->" + peso);
  
  // console.log("Altura ->" + altura);

  console.disableYellowBox=true;
  return (
    <HomeStack/>
  );
}


