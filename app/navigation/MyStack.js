import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import Home from '../screens/Home';
import Login from '../screens/Login';
import ScanBarcode from '../screens/ScanBarcode';
import GenerateBarcode from '../screens/GenerateBarcode';
import CreateGroup from "../screens/CreateGroup";
import ViewGroup from "../screens/ViewGroup";

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ScanBarcode" component={ScanBarcode}/>
            <Stack.Screen name="GenerateBarcode" component={GenerateBarcode}/>
            <Stack.Screen name="CreateGroup" component={CreateGroup}/>
            <Stack.Screen name="ViewGroup" component={ViewGroup}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}