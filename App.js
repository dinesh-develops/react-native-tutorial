import React,{useState} from 'react';
import { View, Text, StyleSheet,ScrollView, Button,TextInput  } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const App = () => {
  const[people,setPeople]=useState([
    {name:"Dinesh",key:1},
    {name:"Dhanush",key:2},
    {name:"SivaShankar",key:3},
    {name:"Ajaye",key:4},
    {name:"Venkat",key:5},
    {name:"Dinesh",key:6},
    {name:"Dhanush",key:7},
    {name:"SivaShankar",key:8},
    {name:"Ajaye",key:9},
    {name:"Venkat",key:10},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item)=>{
          return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
export default App;