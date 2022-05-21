import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import { fontSizes } from "./utils/sizes";



export const RoundedButton= ({
  style = {},
  textStyle = {},
  size = 70,
  ...props
}) =>{
  return (
    <TouchableOpacity 
      style = {[styles(size).radius ,style]}
      onPress = {props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export const styles = (size) => StyleSheet.create({
  radius:{
    borderRadius : size/2,
    width: size,
    height: size,
    borderWidth: 1,
    alignItems : "center",
    borderColor: '#fff',
    justifyContent: "center",
  },
  text : {color : '#fff', fontSize: size/2.5}
})
