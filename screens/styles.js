import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flexGrow: 1,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    headline: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }, 
    flatListContainer: {
        width: '100%',
        justifyContent: 'center',
    },
    flatListView: {
        height: 600,
        margin: 20,
    },
    refresh: {
        backgroundColor: 'blue',
        padding: 10,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    menuView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})