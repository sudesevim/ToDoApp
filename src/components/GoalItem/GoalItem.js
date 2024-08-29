import React from "react";
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './GoalItem.style';


function GoalItem(props) {
    return (
        <TouchableOpacity 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GoalItem;