import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Focus} from './components/features/focus/focus';
import {colors} from './components/utils/colors';


export default function App() {
  const [focusSubject, setFocusSubject]=useState(null);
  console.log("yolo");
  return (
    <View style={styles.container}>

      { focusSubject ? 
        <Text> Build the timer </Text> : 
        <Focus addSubject = {setFocusSubject} />
      }
      <Text>{focusSubject}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : colors.blue,
  },
});
