import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({title, onPress} ) => {
    return (
        <TouchableOpacity style={styles.button}onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f6a20a',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '85%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16, 
    },
});


export default Button;