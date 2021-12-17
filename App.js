import React,{ useState } from "react";
import { StyleSheet,Text,View,FlatList } from "react-native";
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/AddTodo';

const App = () => {
  const[todo,setTodos]=useState([
    {text:"Buy Coffee",key:1},
    {text:"Create an APP",key:2},
    {text:"Create an Website",key:3},
  ])
  const[globalKey,setGlobalKey]=useState(0)
  const pressHandler=(key)=>{
    globalKey===0 ? setGlobalKey(1):setGlobalKey(globalKey-1)
    setTodos((prevToDos)=>{
      return prevToDos.filter(toDo=>toDo.key!=key)
    })
  }
  const submitHandler=(text)=>{
    globalKey===0 ? setGlobalKey(1):setGlobalKey(globalKey+1)
    setTodos((prevToDos)=>{
      return [
        {text:text,key:globalKey},
        ...prevToDos
      ];
    })
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* Form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todo}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
})
export default App
