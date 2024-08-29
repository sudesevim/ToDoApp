import React, {useState} from "react";
import {View, TextInput} from 'react-native';
import styles from './GoalInput.style';
import Button from "../Button/Button";

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.headerContainer}>
            <TextInput 
            style={styles.TextInput} 
            placeholder="Add goal..." 
            placeholderTextColor={'white'}
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
            <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
    );
};

export default GoalInput;