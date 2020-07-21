import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BookScreen from "../screens/BooksScreen";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import CartScreen from "../screens/CartScreen";
import { createStackNavigator } from '@react-navigation/stack'

import Ionicons from 'react-native-vector-icons/AntDesign'
import ConcantScreen from "../screens/ConcantScreen";
import DepartmentScreen from "../screens/DepartmentScreen";
import MyScreen from "../screens/MyScreen";
import HomeTopTab from "./HomeTopTab";


const Stack = createStackNavigator()

function MainStackNavigator() {
  return(
      <Stack.Navigator>
        <Stack.Screen
          name={'Books'}
          component={BookScreen}
          options={{headerRight: props => <ShoppingCartIcon {...props} />}}
        />
        <Stack.Screen name={'Cart'} component={CartScreen} />
      </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function XBottomTab() {
  return(
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === '首页') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === '公司圈') {
            return (
              <Ionicons
                name={focused ? 'notification' : 'notification'}
                size={size}
                color={color}
              />
            );
          }else if (route.name === '沟通') {
            return (
              <Ionicons
                name={focused ? 'message1' : 'message1'}
                size={size}
                color={color}
              />
            );
          }else if (route.name === '部门') {
            return (
              <Ionicons
                name={focused ? 'contacts' : 'contacts'}
                size={size}
                color={color}
              />
            );
          }else if (route.name === '我的') {
            return (
              <Ionicons
                name={focused ? 'user' : 'user'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen name={'首页'} component={HomeTopTab} />
      <BottomTab.Screen name={'公司圈'} component={MainStackNavigator} />
      <BottomTab.Screen name={'沟通'} component={ConcantScreen} />
      <BottomTab.Screen name={'部门'} component={DepartmentScreen} />
      <BottomTab.Screen name={'我的'} component={MyScreen} />
    </BottomTab.Navigator>
  );
}

export default XBottomTab
