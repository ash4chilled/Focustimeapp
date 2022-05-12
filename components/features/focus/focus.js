import React, {useState} from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';

export const Focus=({addSubject}) => {
 const [tempItem, settempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>What would you like to focus on ? </Text>
        <View style = {styles.inputContainer}>

          <TextInput 
            style={{flex: 1, marginRight: fontSizes.sm}} 
            onSubmitEditing={
              ({nativeEvent}) =>{
                settempItem(nativeEvent.text)
              }
            } 
          />
          
          <RoundedButton  
            size = {50} 
            title = "+"
            onPress = { () => {
              addSubject(tempItem)
            }} />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  titleContainer : {
    flex : 0.5,
    justifyContent : "center",
  },
  title :{
    color : colors.white,
    fontWeight : 'bold',
    fontSize : fontSizes.lg,
  },
  inputContainer : {
    flexDirection: "row",
    paddingTop : spacing.sm,
    alignItems: "center"
  }, 
});
