import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from '../navigation/BottomTabNavigator'

function RootStackNavigator() {
  return(
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default RootStackNavigator
