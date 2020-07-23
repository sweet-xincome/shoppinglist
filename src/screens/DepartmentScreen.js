import React,{useState} from 'react'
import {
  View,
  Text,
  FlatList,
  Button,
  RefreshControl,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'
import MessageIcon from "../components/MessageIcon";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {paperlist} from "../utils/Data";

function PersonInfo() {
  return(
    <View>个人信息</View>
  )
}

function DepartMessage() {
  return(
    <View>
      <Text>DepartMessage</Text>
    </View>
  );
}

//分割线
function Separator() {
  return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

const windowWidth = Dimensions.get("window").width;

//more更多
const MorePaper = () => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 5,
      marginBottom: 1,
      paddingTop: 3,
      paddingBottom: 3,
    }}>
      <Text style={{fontSize: 13}}>建议</Text>
      <Text style={{fontSize: 13, color: '#6495ed'}}>更多<Ionicons name={'ios-chevron-forward-sharp'} color={'#6495ed'}/></Text>
    </View>
  );
}
//image
const ImageCircle = () => {
  return(
    <TouchableOpacity
      style={{marginRight: 10, marginLeft: 10, marginTop: 5, marginBottom: 5}}
    >
      <View style={styles.itemCountContainer}>
        <Ionicons name={'person-outline'} size={25} color={'#101010'} />
      </View>
    </TouchableOpacity>
  );
}

//fastlist headerComponent
function DepartMainFastListHeader() {
  const navigation = useNavigation()
  return(
    <View>
      <MorePaper />
      <View style={{
        width: windowWidth,
        height: 130,
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          backgroundColor: "white"
        }}
        >
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
        </View>
      </View>
      <MorePaper />
      <View style={{
        width: windowWidth,
        height: 241,
      }}>
        <View style={{
          backgroundColor:'white'
        }}>
          <Image
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: windowWidth-20, marginLeft: 10, marginTop: 5, height: 180, backgroundColor: 'white'}}
          />
          <Text style={{marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5}}>今天的我们需要什么？</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={{marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, color: 'gray', fontSize: 12}}>沈翔宇转 2018-03-16</Text>
            <Text style={{marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, color: 'gray', fontSize: 12}}>91</Text>
          </View>
        </View>
      </View>
      <MorePaper />
    </View>
  );
}

//fastlist footerComponent
function DepartMainFastListFooter(){
  const Moment = () => {
    return(
      <View>
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 0.2
          }}>
            <ImageCircle />
          </View>
          <View style={{
            flexDirection: 'column',
            flex: 0.3,
          }}>
            <View
              style={{
                flex: 0.2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8
              }}
            >
              <Text>严涌俊</Text>
              <View style={{marginTop: 4}}><Ionicons name={'star-outline'} size={12} /></View>
              <Text>0</Text>
            </View>
            <View style={{
              flex: 0.1,
              flexDirection: 'row',
              justifyContent: 'center'
            }}
            >
              <Text style={{color: 'gray', fontSize: 12}}>2019-04-11 10:45:45</Text>
            </View>
          </View>
          <View style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginRight: 10
          }}>
            <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5}>
              <View style=  {{justifyContent:'center',alignItems:'center',width:50,height:25,backgroundColor:'#fff0f5'}}>
                <Text style={{color:'black', fontSize: 12}}>关注+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{backgroundColor: 'white'}}
        >
          <Text style={{paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10}}>    TouchableOpacity组件中使用了三个属性，具体含义：
            onPress 指定点击事件；
            activeOpacity 正常状态下的透明度；
            focusedOpacity 点击状态下的透明度；
            TouchableOpacity组件的子组件是一个View，里边又包含了一个Image和Text，最终构成了我们自定义的ImageButton属性。
            TouchableNativeFeedback其实和TouchableOpacity使用方式差不多，只不过属性不太一样，这里就不多说了。
          </Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 5
        }}>
          <View style={{
            flex: 0.2,
            flexDirection: 'row',
          }}>
            <Ionicons name={'thumbs-up-outline'} size={12} />
            <Text style={{marginTop: -4, marginLeft: 4}}>1</Text>
          </View>
          <View style={{
            flex: 0.2,
            flexDirection: 'row',
          }}>
            <Ionicons name={'chatbox-ellipses-outline'} size={12} />
            <Text style={{marginTop: -4, marginLeft: 4}}>1</Text>
          </View>
          <View style={{
            flex: 0.6,
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <Ionicons name={'close-circle-outline'} size={12} />
          </View>
        </View>
      </View>
    );
  }
  return(
    <View>
      <MorePaper />
      <Moment />
    </View>
  );
}

function DepartMain() {
  //fastlist渲染
  const Item = ({title, time, picture}) => {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
      }}>
        <Image
          source={{uri: picture}}
          style={{width: 50, height: 50}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{flex: 0.8}}>{title}</Text>
          <Text style={{flex: 0.2, color: 'gray', fontSize: 10}}>{time}</Text>
        </View>
      </View>
    );
  }
  const renderItem = ({item}) => (
    <Item title={item.title} time={item.time} picture={item.picture} />
  )
  //fastlist刷新
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

  return(
    <View>
      <FlatList
        ItemSeparatorComponent={() => Separator()}
        data={paperlist}
        ListHeaderComponent={DepartMainFastListHeader}
        ListFooterComponent={DepartMainFastListFooter}
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

const DepartmentScreens = createStackNavigator();

function DepartmentScreen() {
  return(
    <DepartmentScreens.Navigator>
      <DepartmentScreens.Screen
        name={'PCBA科'}
        component={DepartMain}
        options={{
          headerRight: props => <MessageIcon {...props} />,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons
              name={'list-outline'}
              size={25}
              color={'black'}
              style={{ marginLeft: 10 }}
            />
          )
        }}
      />
      <DepartmentScreens.Screen name={'PCBA科1'} component={DepartMessage} />
      <DepartmentScreens.Screen name={'个人信息'} component={PersonInfo} />
    </DepartmentScreens.Navigator>
  );
}

const styles = StyleSheet.create({
  itemCountContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default DepartmentScreen
