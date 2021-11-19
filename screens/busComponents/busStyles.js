import { StyleSheet } from "react-native";

export default busStyles = StyleSheet.create({
    busRouteView: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    busRouteTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    busStopView: {
        padding: 20, 
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        margin: 10
    }, 
    busStopTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    stopButton: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 10
    },
    busScheduleView: {
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey'
    },
    busScheduleTime: {
        fontWeight: 'bold'
    }
})