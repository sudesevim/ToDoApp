import React, {useState} from "react";
import {View, TextInput, Button} from 'react-native';
import styles from './GoalInput.style';

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    return (
        <View style={styles.headerContainer}>
            <TextInput 
            style={styles.TextInput} 
            placeholder="Add goal..." 
            onChangeText={goalInputHandler}/>
            <Button title="Add Goal" onPress={props.onAddGoal}/>
      </View>
    );
};

export default GoalInput;