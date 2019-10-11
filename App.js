import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import DoItem from './components/DoItem';
import DoInput from './components/DoInput';

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setToDos(currentGoals => [...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  };

    const removeGoalHandler = goalId => {
      setToDos(currentGoals => {
        return currentGoals.filter((goal) => goal.id !==goalId);
      });
    };

    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };

  return (
    <View style={styles.screen}>
      <Button title={"Add New Goal"} onPress={() => setIsAddMode(true)} />
      <DoInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={toDos} 
        renderItem={itemData => <DoItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
});