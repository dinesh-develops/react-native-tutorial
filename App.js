import React,{useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const App = () => {
  const[person,setPerson]=useState({name:"Dinesh",age:"22"})
  const name=person.name
  function setPersonData(){
    setPerson((prevState) => ({
      ...prevState,
      name:"Dhanush"
  }));
  }
  return (
    <View style={styles.container}>
      <Text>My Name is {person.name}</Text>
      <Text>My age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Click Me' onPress={setPersonData} />  
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    backgroundColor:'green',
    padding:20
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    alignItems:'center',
    backgroundColor:'pink'
  },
  buttonContainer:{
    backgroundColor:'black'
  }
});
export default App;