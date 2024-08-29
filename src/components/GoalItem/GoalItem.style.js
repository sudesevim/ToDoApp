import { StyleSheet } from "react-native";

export default StyleSheet.create({
    goalItem: {
        margin: 8,
        width: '98%',
        padding: 8, 
        backgroundColor: '#7ca354',
        borderRadius: 8, 
        // color: 'white', not working on View 
      },
      goalText: {
        color: 'white',
      },
      pressedItem: {
        opacity: 0.5,
        color: '#36474f',
      },
})