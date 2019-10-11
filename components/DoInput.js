import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const DoInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }; 

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder="To Do..." style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}  
        />
        <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={addGoalHandler}/>
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems:'center'
        
      },
      input: {
        width: '70%', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10,
        marginBottom: 10,
      },
      buttonContainer: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: '60%'
      }

});

export default DoInput;