import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenResults from "../components/ScreenResults";
import Home from "../components/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator ();

export default function HomeStack() {
  return (
      <NavigationContainer>
          <Stack.Navigator
          screenOptions={{headerShown:false}}
          >
        <Stack.Screen
            name="home"
            component={Home}
            options = {{title : "Calculadora"}}
        >
        </Stack.Screen>
      <Stack.Screen
        name="result"
        component={ScreenResults}
        options={{ title: "Resultados" }}
      ></Stack.Screen>
    </Stack.Navigator>
      </NavigationContainer>
  
  );
}
