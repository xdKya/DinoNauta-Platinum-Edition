import React from "react";
import {NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Eei from "./screens/eei";
import Home from "./screens/home";
import Meteor from "./screens/meteor";

const Stack= createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name= "HomeScreen" component = {Home}/>
      <Stack.Screen name= "Eei" component = {Eei}/>
      <Stack.Screen name= "Meteors" component = {Meteor}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

