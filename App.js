import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Dinesh <Text>S</Text></Text>
        <Text>AK</Text>
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
  }
});
export default App;