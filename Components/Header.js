import React,{ useState } from "react";
import { StyleSheet,Text,View,FlatList } from "react-native";
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDo's</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:40,
        backgroundColor:'red'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})
export default Header
