import React from 'react'
import {View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import MessageIcon from "../components/MessageIcon";

function DepartMessage() {
  return(
    <View>
      <Text>DepartMessage</Text>
    </View>
  );
}
function DepartMain() {
  return(
    <View>
      <Text>DepartMain</Text>
    </View>
  );
}

const DepartmentScreens = createStackNavigator();

function DepartmentScreen() {
  return(
    <DepartmentScreens.Navigator>
      <DepartmentScreens.Screen
        name={'PCBA科'}
        component={DepartMain}
        options={{headerRight: props => <MessageIcon {...props} />}}
      />
      <DepartmentScreens.Screen name={'PCBA科1'} component={DepartMessage} />
    </DepartmentScreens.Navigator>
  );
}

export default DepartmentScreen
