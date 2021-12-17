import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Dinensh', id: '1' },
    { name: 'dw', id: '2' },
    { name: 'www', id: '3' },
    { name: 'luiwcwgi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toawcwwwc', id: '6' },
    { name: 'bowser', id: '7' },
    { name: 'cwwvw', id: '8' },
    { name: 'yoshi', id: '9' },
    { name: 'mavwwwvrio', id: '10' },
    { name: 'luigi', id: '11' },
    { name: 'peac wwch', id: '12' },
    { name: 'toawwwccd', id: '13' },
    { name: 'bowser', id: '14' },
  ]);
  const pressHandler=(id)=>{
    console.log("remove"+id+people.name);
    console.log(people)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.id !=id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList 
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

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