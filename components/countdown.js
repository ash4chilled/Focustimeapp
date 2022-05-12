
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { fontSizes } from './utils/sizes'; 
import { colors } from './utils/colors';
import { spacing } from './utils/sizes';


const minutesTomillis = (min) => min * 1000 * 60;


export const Countdown = () => {

    return (
        <Text style = {styles.text}>Countdown timer goes here</Text>
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