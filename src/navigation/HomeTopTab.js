import React from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Image} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNApplySwiper from "../components/RNApplySwiper";
import {paperlist} from '../utils/Data'

function StudyShare() {
  const Item = ({title, time, picture}) => {
    return(
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{time}</Text>
        </View>
        <Image  source={{uri: {picture}}} style={{width: 50, height: 50}}/>
      </View>
    );
  }
  const renderItem = ({item}) => (
    <Item title={item.title} time={item.time} picture={item.picture} />
  )

  return (
    <View>
      <RNApplySwiper />
      <Text style={{marginLeft: 10, color: 'black', fontSize: 13, marginTop: 5, marginBottom: 5}}>延锋伟世通汽车电子  欢迎你</Text>
      <FlatList
        data={paperlist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const TopTab = createMaterialTopTabNavigator();

function HomeTopTab() {
  return(
    <TopTab.Navigator lazy={true} swipeEnabled={true} tabBarOptions={{
      scrollEnabled: true,        //是否可以滚动标签栏目(当tab总数超过一屏)
      indicatorStyle: {         //指示器样式 height：0则不显示
        height: 2,
        backgroundColor:'tomato'
      },
      tabStyle:{   //设置单个tabbar样式
        height:35,
        width: 'auto',
        marginTop:0,
        paddingTop:0
      },
      style: {                    //设置整个tabbar样式(背景颜色等)
        paddingBottom:0,
        margin:0,
      },
    }}
    >
      <TopTab.Screen name="首页" component={StudyShare} />
      <TopTab.Screen name="全部" component={StudyShare} />
      <TopTab.Screen name="学习分享" component={StudyShare} />
      <TopTab.Screen name="政策制度" component={StudyShare} />
      <TopTab.Screen name="近期要闻" component={StudyShare} />
      <TopTab.Screen name="车市动态" component={StudyShare} />
      <TopTab.Screen name="综合资讯" component={StudyShare} />
      <TopTab.Screen name="企业文化" component={StudyShare} />
      <TopTab.Screen name="公司活动" component={StudyShare} />
      <TopTab.Screen name="荣誉获奖" component={StudyShare} />
    </TopTab.Navigator>
  );
}

//首页 页面，存放TopTab
const RootStack = createStackNavigator(); // 堆栈stack 实例

const RootRouteScreen = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name=' '
        component={HomeTopTab}
        options={{
          headerStyle: {
           backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerLeft: () => (
            <View style={styles.container}>
              <Ionicons
                name={'list-outline'}
                size={30}
                color={'white'}
                style={{ marginLeft: 5 }}
                onPress={() => alert('This is a button')}
              />
              <View style={styles.searchBox}>
                <Ionicons name={'search-outline'} size={15} color={'gray'} style={{marginLeft: 6}}/>
                <TextInput style={styles.inputText}
                  keyboardType='web-search'
                  placeholder='搜索京东商品/店铺' />
              </View>
            </View>
          ),
          headerRight: () => (
            <Ionicons
              name={'scan'}
              size={25}
              color={'white'}
              style={{ marginRight: 10 }}
            />
          ),
        }}
      />
    </RootStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',   // 水平排布
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
    height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
    alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
  },
  searchBox:{//搜索框
    height:25,
    flexDirection: 'row',   // 水平排布
    flex:1,
    borderRadius: 5,  // 设置圆角边
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  inputText:{
    flex:1,
    backgroundColor:'transparent',
    fontSize:31,
  },
});

export default RootRouteScreen
