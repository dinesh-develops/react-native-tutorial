import React,{useState} from 'react';
import { View, Text, StyleSheet, Button,TextInput  } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const App = () => {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='ex.John' onChangeText={val=>setName(val)} />
      <TextInput style={styles.input} placeholder='20' keyboardType='numeric' onChangeText={val=>setAge(val)}/>
      <Text>My Name is {name}</Text>
      <Text>My age is {age}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    borderColor:'black',
    borderWidth:1,
    height:40,
    margin:10,
    width:300,
    padding:10
  }
});
export default App;