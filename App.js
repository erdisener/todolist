import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import DoItem from './components/DoItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [toDos, setToDos] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setToDos(currentGoals => [...currentGoals, 
      {key: Math.random().toString(), value: enteredGoal}
    ]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="To Do..." style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}  
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList
        data={toDos} 
        renderItem={itemData => <DoItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems:'center'
  },
  input: {
    width: '70%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10
  }
  
});