import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Colors from "../utils/Colors";

let mensaje = "Resultados";
let paint = Colors.DEFAULT_COLOR;


export default function ScreenResults({ route }) {
  const { nombre, edad, peso, altura, imc } = route.params;

    if(imc < 18){
      paint = Colors.PESO_BAJO_COLOR;
        mensaje = "Peso Bajo"
    }else if (imc > 18.1 && imc < 24.9){
      paint = Colors.PESO_NORMAL_COLOR;
        mensaje = "Normal"
    }else if (imc > 25 && imc < 29.9){
      paint = Colors.SOBRE_PESO_COLOR;
      mensaje = "Sobre Peso"
    }else if (imc > 30 && imc < 34.9){
      paint = Colors.SOBRE_PESO1_COLOR;
        mensaje = "Sobre Peso I"
    }else if (imc > 35 && imc < 39.0){
      paint = Colors.SOBRE_PESO2_COLOR;
        mensaje = "Sobre Peso II"
    }else if (imc > 40){
      paint = Colors.RIESGOSO_COLOR;
        mensaje = "Riesgoso"
    }

    console.log(paint);
  return (
    <>
     <StatusBar barStyle = "dark-content"/>
      <SafeAreaView style = {styles.safeArea}>
        <View style = {styles.background}></View>
        <Text style = {styles.text}>{mensaje}</Text>
      </SafeAreaView>
      <View>
          {imc  && (
              <View>
                  <Text style = {styles.container}>Hola {nombre} tienes {edad} años y tu IMC es : {Math.round(imc)} y te clasificas como : {mensaje}</Text>
              </View>
          )}{
            !imc && (<View>
              <Text style = {styles.errorM}>Faltan Campos Por Llenar</Text>
          </View>)
          
          }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    textAlign: 'center',
    color : "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  safeArea: {
    height: 150,
    alignItems: "center",
  },
  background: {
    backgroundColor: paint,
    height: 100,
    width: "100%",
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    position: "absolute",
    zIndex: -1,
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "justify",
    marginTop: 20,
  },
  errorM : {
    textAlign: 'center',
    color : "red",
    fontWeight: "bold",
    fontSize: 20,
    },
  
  
});
