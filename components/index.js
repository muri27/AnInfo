import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from './AboutScreen';
import Login  from './LoginScreen';
import Home  from './HomeScreen';
import Details  from './DetailScreen';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AboutStack = createStackNavigator();
const AboutStackScreen = () => {
    return(
    <AboutStack.Navigator screenOptions={{headerShown: false}}>
        <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
    );
}

const DetailsStack = createStackNavigator();
const DetailsStackScreen = () => {
    return(
    <DetailsStack.Navigator>
        <DetailsStack.Screen name="Details" component={Details} />
    </DetailsStack.Navigator>
    );
}

const TabsScreen = () => {
    return(
    <Tabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? "home" : "home";
            return <Entypo name={iconName} size={size} color={color} />;
          }else{
            iconName = focused ? 'user' : 'user';
            return <FontAwesome5 name="user" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#21c8de',
        inactiveTintColor: 'grey',
      }}>
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="About" component={AboutStackScreen}/>
    </Tabs.Navigator>
    );
}

const DrawerScreen = (navigation) => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} />
            <Drawer.Screen name="About" component={AboutStackScreen} />
            <Drawer.Screen name="Sign Out" component={Login} />
        </Drawer.Navigator>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>  
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={DetailsStackScreen} />
                <Stack.Screen name='Drawer' component={DrawerScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    );
  }