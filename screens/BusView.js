import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View, FlatList, Button } from 'react-native';
import { getLocation, getStops } from '../hooks/BusHooks'
import BusStop from './busRoute/BusStop';
import stopData from './data.json'

export default function BusView() {
    const [busStops, setBusStops] = useState([])
    const [latitude, setLatitude] = useState(49.258627)
    const [longitude, setLongitude] = useState(-123.210761)
    const [range, setRange] = useState(200)

    // find nearest bus stops to current location 
    useEffect(() => {
        async function retrieveStops() {
            try {
                const response = await getStops(latitude, longitude, range)
                setBusStops(response)
            } catch (err) {
                alert(err)
            }
        }
        // TODO: retrieveStops()
        setBusStops(stopData)
    }, [latitude, longitude])

    // on start, retrieve location from the phone
    useEffect(() => {
        async function retrieveLocation() {
            try {
                const response = await getLocation()
                setLatitude(response[0])
                setLongitude(response[1])
            } catch (err) {
                alert(err)
            }
        }
        retrieveLocation()
    }, [])

    const renderItem = ({ item }) => (
        <BusStop stop={item}></BusStop>
    )

    return (
        <View>
            <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={busStops}
                keyExtractor={stop => stop.StopNo.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}