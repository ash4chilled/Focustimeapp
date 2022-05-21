import React, {useState} from 'react';
import {View, StyleSheet, Text, Vibration, Platform} from "react-native";
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../countdown';
import { RoundedButton } from '../../RoundedButton';
import { Timing } from '../timing';




const DEFAULT_TIME = 0.1

export const Timer = ({
        focusSubject, 
        onTimerEnd,
        clearSubject
    }) => {

    useKeepAwake();

    const [minutes, setMinutes] = useState(DEFAULT_TIME)
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const vibrate = () => {
        if(Platform.OS == 'ios'){
            const interval = setInterval( () => {Vibration.vibrate()}, 1000)
            setTimeout( () => {interval}, 10000)
        }
        else{
            Vibration.vibrate(500)
        }
    }

    const onProgress = (progress) =>{
        setProgress(progress)
    }

    const changeTime = (min) => {
        setMinutes(min)
        setProgress(1)
        setIsStarted(false)
    }

    const onEnd = () =>{
        setMinutes(DEFAULT_TIME)
        setProgress(1)
        setIsStarted(false)
        vibrate()
        onTimerEnd(null)
    }
    
    return (
        
        <View style = {styles.container}>
            <View style = {styles.countdown}>
                <Countdown 
                    isPaused={!isStarted} 
                    onProgress = {onProgress}
                    minutes = { minutes}
                    onEnd = {onEnd}/>
                
            </View>
           

            <View style={{paddingTop : spacing.xxxl}}>
                <Text style = {styles.title}>Focusing on</Text>
                <Text style ={styles.task}>{focusSubject}</Text>
               
            </View> 

            <View>
                <ProgressBar 
                    progress = {progress}
                    style = {styles.progressBar}/>
            </View>

            <View style = {styles.buttonWrapper}>
                <Timing onChangeTime = {changeTime} />
            </View>

            <View style = {styles.buttonWrapper}>
                {isStarted ? (
                    <RoundedButton 
                        title="pause" 
                        onPress = {  ()=>{
                            setIsStarted(false) 
                        }}
                    />
                ) : (
                    <RoundedButton 
                        title="start" 
                        onPress={ ()=> {
                            setIsStarted(true);
                        }} 
                    />
                )}
            </View>

            <View>
                <RoundedButton 
                    title = "X" 
                    size = {50} 
                    onPress = { ()=>{
                        clearSubject()
                    } } />
            </View> 

        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex:1
    },
    title: {
        color : colors.white,
        textAlign : 'center'
    },
    task : {
        color : colors.white,
        textAlign : 'center',
        fontWeight : 'bold',
    },
    countdown:{
        alignItems: "center",
        justifyContent: "center",
        flex: 0.5
    },
    buttonWrapper : {
        flex : 0.3,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    progressBar : {
        marginTop : spacing.sm,
        color : colors.lightBlue,
    }
})
