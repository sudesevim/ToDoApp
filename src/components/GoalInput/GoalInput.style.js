import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'grey',
        flex: 1,
        borderRadius: 15,
        borderColor: 'white',
        backgroundColor: '#37474f',
        padding: 10,
      },
      TextInput: {
        width: '90%',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        color: 'white',
        borderBottomColor: 'lightgrey',  // Çizginin rengini burada belirliyoruz
        borderBottomWidth: 1,
        padding: 10,
      },
})