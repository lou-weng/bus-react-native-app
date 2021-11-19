import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { getLocation, getStops } from '../hooks/BusHooks'
import BusStop from './busComponents/BusStop';
import styles from './styles';

// landing page of app
export default function BusView() {
    const [busStops, setBusStops] = useState([])
    const [latitude, setLatitude] = useState(49.258627)
    const [longitude, setLongitude] = useState(-123.210761)
    const [range, setRange] = useState(500)
    const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
        retrieveStops()
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
        <SafeAreaView style={styles.mainView}>
                <View>
                    <Text style={styles.headline}>Bus Schedule</Text>
                    {isLoading && <ActivityIndicator style={{marginTop: 10}}size="large" color="#000000"/>}
                </View>

                <View style={styles.flatListView}>
                    <FlatList
                        style={styles.flatList}
                        nestedScrollEnabled
                        contentContainerStyle={styles.flatListContainer}
                        data={busStops}
                        keyExtractor={stop => stop.StopNo.toString()}
                        renderItem={renderItem}
                    />
                </View>
        </SafeAreaView>
    )
}