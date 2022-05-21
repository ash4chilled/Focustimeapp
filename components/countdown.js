
import React , {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { fontSizes } from './utils/sizes'; 
import { colors } from './utils/colors';
import { spacing } from './utils/sizes';


const minutesToMillis = (min) => min * 1000 * 60;

const formatTime = (time) => time <10 ?   `0${time}` : time ;

export const Countdown = ({
    minutes,
    onProgress,
    isPaused,
    onEnd,
}) => {
    const interval = React.useRef(null);

    useEffect( () =>{
        setMillis(minutesToMillis(minutes))
    }, [minutes])

    useEffect ( () => {
        onProgress(millis/minutesToMillis(minutes))
        if(millis == 0){
            onEnd();
        }
    }, [millis])

    useEffect(()=>{
        const countDown = () =>{
            setMillis((time)=>{
                if(time === 0){
                    clearInterval(interval.current);
                   
                    return time;
                }
                const timeLeft = time - 1000;
                return timeLeft;
            })
        }

        if(isPaused){
            if(interval.current) 
                clearInterval(interval.current)
            return;
        }
        interval.current = setInterval(countDown,1000);

        return () => clearInterval(interval.current)
    }, [isPaused, minutes])

    const [millis, setMillis] = useState(minutesToMillis(minutes));

    const minute = Math.floor(millis/1000/60) % 60 ;
    const seconds = Math.floor(millis/1000) % 60
    return (
        <Text style = {styles.text}>{formatTime(minute)} : {formatTime(seconds)}</Text>
    )

}


styles = StyleSheet.create({
    text : {
        fontSize : fontSizes.xxl,
        fontWeight : 'bold',
        color : colors.white,
        padding : spacing.lg,
        backgroundColor: 'rgba(94, 132,226,0.3)'
    }
})