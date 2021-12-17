import React,{ useState } from "react";
import { StyleSheet,Text,View,FlatList, TouchableOpacity } from "react-native";
const TodoItem = ({item,pressHandler}) => {
    return (
       <TouchableOpacity onPress={()=>pressHandler(item.key)} >
           <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    item:{
        padding:16,
        borderColor:"#bbb",
        borderWidth:2,
        borderStyle:'dashed',
        marginTop:16,
        borderRadius:10
    }
})

export default TodoItem
