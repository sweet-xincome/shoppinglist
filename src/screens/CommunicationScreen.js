import React,{useState} from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Image,RefreshControl} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

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

function HomeTop() {
  return(
    <View>
      <Ionicons
        name={'list-outline'}
        size={30}
        color={'white'}
        style={{ marginLeft: 5 }}
        onPress={() => alert('This is a button')}
      />
      <View>
        <Ionicons name={'search-outline'} size={15} color={'gray'} style={{marginLeft: 6}}/>
        <TextInput
          keyboardType='web-search'
          placeholder='请输入搜索内容'
        />
      </View>
      <Ionicons
        name={'scan'}
        size={25}
        color={'white'}
        style={{ marginRight: 10 }}
      />
    </View>
  );
}

const CommTopTab = createMaterialTopTabNavigator();

function CommTopTabs() {
  return(
    <CommTopTab.Navigator>
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
