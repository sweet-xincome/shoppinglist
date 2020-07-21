import React,{useState} from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Image,RefreshControl} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const CommunicationTopTab = createMaterialTopTabNavigator();

function CommunicationTopTabs() {
  return(
    <CommunicationTopTab.Navigator>
      <CommunicationTopTab.Screen name={'全部'} component={Concacts} />
      <CommunicationTopTab.Screen name={'个人'} component={Concacts} />
      <CommunicationTopTab.Screen name={'#主题#'} component={Concacts} />
      <CommunicationTopTab.Screen name={'组织'} component={Concacts} />
      <CommunicationTopTab.Screen name={'应用'} component={Concacts} />
    </CommunicationTopTab.Navigator>
  );
}

//沟通Tab
function Communication() {
  return(
    <CommunicationTopTabs />
  );
}
//通讯录Tab
function Concacts() {
  return(
    <View>
      <Text>Concants</Text>
    </View>
  );
}
//SDWT  Tab
function SDWT() {
  return(
    <View>
      <Text>SDWT</Text>
    </View>
  );
}

const CommTopTab = createMaterialTopTabNavigator();

function CommTopTabs() {
  return(
    <CommTopTab.Navigator
      style={{
      }}
    >
      <CommTopTab.Screen name={'沟通'} component={Communication} />
      <CommTopTab.Screen name={'通讯录'} component={Concacts} />
      <CommTopTab.Screen name={'SDWT'} component={SDWT} />
    </CommTopTab.Navigator>
  );
}

function CommunicationScreen() {
  return(
    <CommTopTabs />
  );
}

export default CommunicationScreen
