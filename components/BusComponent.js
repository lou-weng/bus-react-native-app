import React from 'react'
import { Text } from 'react-native'
import * as Location from 'expo-location'

class BusComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    // referenced from https://stackoverflow.com/questions/62975142/how-can-i-get-current-location-for-using-expo-location-api-with-react-native
    async componentDidMount() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            this.setState({
                ...this.state,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        } catch (error) {
            console.log(error)
        }
    }

    // fetchBuses = async () => {
    //     url = ""
    //     try {
    //         const response = await fetch()
    //     }
    // }

    render() {
        return (
            <>
                <Text>Hello There!</Text>
                <Text>Hello {this.state.latitude} and {this.state.longitude}</Text>
            </>
        )
    }
}

export default BusComponent