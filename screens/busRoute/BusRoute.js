import React, {useState, useEffect} from 'react'
import BusSchedule from './BusSchedule'
import { Text } from 'react-native'

export default function BusRoute(props) {
    const [route, setRoute] = useState(props.route)

    return (
        <>
            <Text>{route.RouteNo} {route.Direction} {route.RouteName}</Text>
            {route.Schedules.map((schedule, index) => (
                <BusSchedule key={index} schedule={schedule}></BusSchedule>
            ))}
        </>
    )
}