import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getLocation, getStops } from '../hooks/busHooks'
import BusStop from './busComponents/BusStop';
import styles from './styles';

// landing page of app
export default function BusView() {
    const [busStops, setBusStops] = useState([])
    const [latitude, setLatitude] = useState(49.258627)
    const [longitude, setLongitude] = useState(-123.210761)
    const [range, setRange] = useState(500)
    const [refresh, setRefresh] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

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
        retrieveStops()
        setIsLoaded(true)
    }, [latitude, longitude, busStops])

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
    }, [refresh])

    const onRefresh = () => {
        setBusStops([])
        setIsLoaded(false)
        setRefresh(!refresh)
    }

    const renderItem = ({ item }) => (
        <BusStop stop={item}></BusStop>
    )

    return (
        <SafeAreaView style={styles.mainView}>
                <View style={styles.menuView}>
                    <Text style={styles.headline}>Bus Schedule</Text> 
                </View>

                <View style={styles.flatListView}>
                    {/* {!isLoaded && <ActivityIndicator style={{marginTop: 10}}size="large" color="#000000"/>} */}
                    <FlatList
                        style={styles.flatList}
                        nestedScrollEnabled
                        contentContainerStyle={styles.flatListContainer}
                        data={busStops}
                        keyExtractor={stop => stop.StopNo.toString()}
                        renderItem={renderItem}
                    />
                </View>

                <View style={styles.menuView}>
                    <TouchableOpacity style={styles.refresh} onPress={onRefresh}>
                        <Text style={{ color: 'white' }}>Refresh All</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}