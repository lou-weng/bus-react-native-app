import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
export default function BusSchedule(props) {
    const [schedule, setSchedule] = useState(props.schedule)

    return (
        <>
            <Text>Expected: {schedule.ExpectedCountdown} min</Text>
            <Text>{schedule.ExpectedLeaveTime}</Text>
        </>
    )
}