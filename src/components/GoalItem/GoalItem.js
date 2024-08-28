import React from "react";
import { View, Text} from 'react-native';
import styles from './GoalItem.style';


function GoalItem (props) {
    return (
        <View key={itemData.index} style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
            </View>
    );
};

export default GoalItem;