import React, { useEffect, useRef, useState } from 'react'
import { useDidMountEffect } from '../../hooks/customHooks'
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { getRoutes } from '../../hooks/busHooks'
import BusRoute from './BusRoute'
import busStyles from './busStyles'
import moment from 'moment'

// show bus stop details and routes associated with stop
export default function BusStop(props) {
    const [stop, setStops] = useState(props.stop)
    const [clicked, setClicked] = useState(false)
    const [routes, setRoutes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [time, setTime] = useState(new Date())

    useDidMountEffect(() => {
        async function retrieveRoutes() {
            try {
                let response = await getRoutes(stop.StopNo.toString())
                setRoutes(response)
            } catch (err) {
                alert(err)
            }
        }
        if (clicked) {
            setIsLoading(false)
            retrieveRoutes()
        }
    }, [clicked])

    const renderItem = ({ item }) => (
        <Text>{item.RouteName}</Text>
    )

    const buttonPress = () => {
        if (!clicked) {
            setIsLoading(true)
        }
        setTime(new Date())
        setClicked(!clicked)
    }

    return (
        <View style={busStyles.busStopView}>
            <Text style={busStyles.busStopTitle}>{stop.Name.substring(0, 2)} {stop.StopNo.toString()}</Text>   
            <Text>{stop.OnStreet} and {stop.AtStreet}</Text>
            <Text>Distance: {stop.Distance} metres away</Text>

            <TouchableOpacity style={busStyles.stopButton} onPress={buttonPress}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Refresh buses for {stop.Routes}</Text>
            </TouchableOpacity>

            {isLoading && <ActivityIndicator style={{marginTop: 10}}size="large" color="#000000"/>}
            {clicked && 
                <Text>Last Update: {moment().format('LTS')}</Text>
            }
            {clicked && routes.map((route, index) => (
                <BusRoute key={index} route={route}/>
            ))}
        </View>
    )
}
 