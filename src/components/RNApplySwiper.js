import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'

import Swiper from 'react-native-swiper'


let img1url = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3566251348,1114182777&fm=26&gp=0.jpg";
let img2url = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1365127024,980414404&fm=26&gp=0.jpg";
let img3url = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1874734052,880491637&fm=26&gp=0.jpg";

export default function RNApplySwiper() {
  return(
    <View style={[styles.container,styles.center]}>
      <View style={[styles.swiper_parent,styles.center]}>
        <Swiper showsButtons={false}
                autoplay={true}
                autoplayTimeout={8}
                dot={
                  <View
                    style={{
                      backgroundColor: 'white',
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      marginLeft: 3,
                      marginRight: 3,
                      marginTop: 3,
                      marginBottom: 3
                    }}
                  />
                }
                activeDot={
                  <View
                    style={{
                      backgroundColor: '#6495ed',
                      width: 16,
                      height: 8,
                      borderRadius: 4,
                      marginLeft: 3,
                      marginRight: 3,
                      marginTop: 3,
                      marginBottom: 3
                    }}
                  />
                }
        >
          <View style={[styles.slide,styles.center]}>
            <Image style={styles.image} resizeMode="stretch" source={{uri:img1url}}/>
          </View>
          <View style={[styles.slide,styles.center]}>
            <Image style={styles.image} resizeMode="stretch" source={{uri:img2url}}/>
          </View>
          <View style={[styles.slide,styles.center]}>
            <Image style={styles.image} resizeMode="stretch" source={{uri:img3url}}/>
          </View>
        </Swiper>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 0,
    backgroundColor: '#fff'
  },
  swiper_parent: {
    height:200
  },
  slide: {
    flex: 1,
  },
  center: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: 395
  }
});
