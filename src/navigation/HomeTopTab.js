import React,{useState} from 'react'
import {View, Text, TextInput, StyleSheet, FlatList, Image,RefreshControl} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RNApplySwiper from "../components/RNApplySwiper";
import {paperlist} from '../utils/Data'

function StudyShare() {
  //fastlist列表渲染
  const Item = ({title, time, picture}) => {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
      }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ color: 'gray', fontSize: 8}}>{time}</Text>
        </View>
        <Image
          source={{uri: picture}}
          style={{width: 50, height: 50}}
        />
      </View>
    );
  }
  const renderItem = ({item}) => (
    <Item title={item.title} time={item.time} picture={item.picture} />
  )
  //title
  function TitlePaper(){
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 1,
        marginTop: 3,
        paddingTop: 3,
        paddingBottom: 3
      }}>
        <Text style={{fontSize: 10}}><View style={{backgroundColor: 10}} />新闻</Text>
        <Text style={{fontSize: 10, color: 'blue'}}>进入<Ionicons name={'ios-chevron-forward-sharp'} color={'blue'} /></Text>
      </View>
    );
  }
  //fastlist顶部组件
  const _header = () => {
    return (
      <View>
        <RNApplySwiper />
        <Text style={styles.companyName}>延锋伟世通汽车电子  欢迎你</Text>
        <View style={styles.logoRow}>
          <View >
            <Ionicons name={'bulb-outline'} size={35} />
            <Text>微建议</Text>
          </View>
          <View>
            <Ionicons name={'planet-outline'} size={35} />
            <Text>创新</Text>
          </View>
          <View>
            <Ionicons name={'headset-outline'} size={35} />
            <Text>HCM</Text>
          </View>
        </View>
        <TitlePaper />
      </View>
    );
  }
  const _bottomFooter = () => {
    return(
      <View>
        <TitlePaper />
        <FlatList
          data={paperlist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          getItemLayout={(data,index)=>(
            {length: 100, offset: (100+2) * index, index}
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    );
  }
  const _footer = () => {
    return(
      <View>
        <TitlePaper />
        <FlatList
          data={paperlist}
          ListFooterComponent={_bottomFooter}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          getItemLayout={(data,index)=>(
            {length: 100, offset: (100+2) * index, index}
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    );
  }
  //fastlist顶部刷新
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <FlatList
        data={paperlist}
        ListHeaderComponent={_header}
        ListFooterComponent={_footer}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        getItemLayout={(data,index)=>(
          {length: 100, offset: (100+2) * index, index}
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
        backgroundColor: 'white'
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
  logoRow:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 3,
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 0,
  },
  companyName:{
    alignItems: 'center',
    backgroundColor: 'white',
    lineHeight: 30,
    paddingLeft: 10,
    color: 'black',
    fontSize: 13,
  },
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
