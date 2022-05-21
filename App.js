import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, AsyncStorage} from 'react-native';
import {useKeepAwake} from 'expo-keep-awake';

import {Focus} from './components/features/focus/focus';
import {colors} from './components/utils/colors';
import {Timer} from './components/features/focus/timer';
import {spacing} from './components/utils/sizes'
import { FocusHistory } from './components/features/focus/focushistory';

const STATUSES = {
  COMPLETE : 1,
  CANCELLED : 2
}

export default function App() {

  useKeepAwake();

  const [focusSubject, setFocusSubject]=useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

 const addFocusHistorySubjectWithState = (subject, status)=>{
   setFocusHistory( [...focusHistory, {key : String(focusHistory.length + 1), subject, status}])
 }

 const onClear=()=>{
   setFocusHistory([])
 }

 const saveFocusHistory = async() =>{
   try{
    await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory))
   }catch(e){
     console.log(e)
   }
 }

 const loadFocusHistory = async() => {
   try{
    const history = await AsyncStorage.getItem('focusHistory')
    if(history && JSON.parse(history).length)
      setFocusHistory(JSON.parse(history))
   }catch(e){
     console.log(e)
   }
 }

 useEffect( () => {
  loadFocusHistory();
 },[])

 useEffect ( () => {
  saveFocusHistory();
 }, [focusHistory])

  return (
    <View style={styles.container}>

      { focusSubject ? 
        <Timer 
          focusSubject = {focusSubject} 
          onTimerEnd = {() => {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE)
            setFocusSubject(null)
          }}
          clearSubject = { ()=> {
            addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED)
            setFocusSubject(null)
          }} /> : 
          (
            <>
              <Focus addSubject={setFocusSubject} />
              <FocusHistory focusHistory={focusHistory} onClear={onClear} />
            </>
          )
        
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
