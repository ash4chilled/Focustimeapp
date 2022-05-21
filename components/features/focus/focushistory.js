import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'

import { RoundedButton } from '../../RoundedButton'
import { fontSizes } from '../../utils/sizes'





export const FocusHistory= ({
    focusHistory,
    onClear
})=>{


    const renderItem = ({item}) => (
        <View>
            <Text style = {styles.historyItems(item.status)} >{item.subject}</Text>
        </View>
    )

    return(
        <>
            <SafeAreaView style = {styles.container} >
                
                { focusHistory.length ? (
                <>
                    <Text style = {styles.title}> Things we have focused on </Text> 
                     <FlatList
                        data = {focusHistory}   
                        renderItem = {renderItem}
                        keyExtractor = { (item,index) => item.focusHistory}
                   />

                   <View>
                       <RoundedButton  
                        title = 'Clear'
                        size = {75}
                        onPress = { () => onClear()} />
                   </View>
                </>
                   
                )
                    
                   : 
                   null
                }
                    
                
               

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
    },
    historyItems : (status) => ({
        color : status > 1 ? 'red' : 'green',
        fontSize : fontSizes.md,
    }),
    title : {
        color : 'white',
        fontSize : fontSizes.lg,
    }
})