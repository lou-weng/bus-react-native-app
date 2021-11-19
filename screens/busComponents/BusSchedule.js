import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import busStyles from './busStyles'

// show the arrival of the next bus
export default function BusSchedule(props) {
    const [schedule, setSchedule] = useState(props.schedule)

    return (
        <>
            <View style={busStyles.busScheduleView}>
                <Text style={busStyles.busScheduleTime}>Expected: {schedule.ExpectedCountdown} min</Text>
                <Text>{schedule.ExpectedLeaveTime.substring(0, 7)}</Text>
            </View>
        </>
    )
}