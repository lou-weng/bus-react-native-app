import React, { useEffect, useRef, useState } from 'react'
import { useDidMountEffect } from '../../hooks/customHooks'
import { Text, View, Button, FlatList } from 'react-native'
import { getRoutes } from '../../hooks/BusHooks'
import routeData from './data.json'
import BusRoute from './BusRoute'

export default function BusStop(props) {
    const [stop, setStops] = useState(props.stop)
    const [clicked, setClicked] = useState(false)
    const [routes, setRoutes] = useState([])

    useDidMountEffect(() => {
        async function retrieveRoutes() {
            try {
                let response = await getRoutes(stop.StopNo.toString())
                setRoutes(response)
            } catch (err) {
                alert(err)
            }
        }
        retrieveRoutes()
    }, [clicked])

    const renderItem = ({ item }) => (
        <Text>{item.RouteName}</Text>
    )

    return (
        <View>
            <Text>{stop.Name}</Text>   
            <Button onPress={() => setClicked(!clicked)} title={stop.StopNo.toString()}/>
            {clicked && routes.map((route, index) => (
                <BusRoute key={index} route={route}/>
            ))}
        </View>
    )
}
 