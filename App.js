import 'react-native-gesture-handler';
import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Index  from './components/index';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
          <Index />
        </View>
    );
  }