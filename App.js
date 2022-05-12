import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Focus} from './components/features/focus/focus';
import {colors} from './components/utils/colors';
import {Timer} from './components/features/focus/timer';
import {spacing} from './components/utils/sizes'


export default function App() {
  const [focusSubject, setFocusSubject]=useState("gardener");

  return (
    <View style={styles.container}>

      { focusSubject ? 
        <Timer focusSubject = {focusSubject} /> : 
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
    paddingTop : spacing.lg,
  },
});
