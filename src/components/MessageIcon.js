import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native'
import {useSelector} from "react-redux";

import Ionicons from 'react-native-vector-icons/Ionicons'

function MessageIcon() {
  const navigation = useNavigation()
  const cartItems = useSelector(state => state.cartItems)

  return(
    <TouchableOpacity
      onPress={() => navigation.navigate('PCBA科1')}
      style={{marginRight: 10}}
    >
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Ionicons name={'chatbox-ellipses-outline'} size={25} color={'#101010'} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 20,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default MessageIcon
