import React from 'react';
import {View, StyleSheet, Text} from "react-native";

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../countdown';


export const Timer = ({focusSubject}) =>{

    return (
        <View style = {styles.container}>
            <Countdown></Countdown>
            
            <View style={{paddingTop : spacing.xxxl}}>
                <Text style = {styles.title}>Focusing on</Text>
                <Text style ={styles.task}>{focusSubject}</Text>
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
    }
})
