
import React from 'react';
import {View, StyleSheet} from 'react-native'
import { RoundedButton} from '../RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({onChangeTime}) => {
    return(
        <>
            <View style = {styles.timmingButton}>
                <RoundedButton 
                    size= {50} 
                    title = "0.1"
                    onPress = { () => onChangeTime(0.1)}/>
            </View>

            <View style = {styles.timmingButton}>
                <RoundedButton 
                    size= {50} 
                    title = "2"
                    onPress = { () => onChangeTime(2)}/>
            </View>

            <View style = {styles.timmingButton}>
                <RoundedButton 
                    size= {50} 
                    title = "3"
                    onPress = {() => onChangeTime(3)}/>
            </View>
        </>
    )
} 

const styles = StyleSheet.create({
    timmingButton : {
        marginRight : spacing.lg
    }
})