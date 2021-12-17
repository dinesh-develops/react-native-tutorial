import React,{ useState } from "react";
import { StyleSheet,Button,Text,TextInput,View,FlatList, TouchableOpacity } from "react-native";
const AddTodo = ({submitHandler}) => {
    const[text,setText]=useState('')
    const changeHandler=(val)=>{
        setText(val)
    }
    const pressHandler = () => {
        if(text){
            submitHandler(text);
            setText('');
        }
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='new Task'
            onChangeText={changeHandler}
            value={text}
            />
            <Button
                title="ADD  TO-DO"
                onPress={() => pressHandler(text)}
                color='coral'
            />
        </View>
    )
}
const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})

export default AddTodo
