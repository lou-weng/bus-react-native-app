import React, {useState, useEffect} from 'react'
import BusSchedule from './BusSchedule'
import { Text, View } from 'react-native'
import busStyles from './busStyles'

export default function BusRoute(props) {
    const [route, setRoute] = useState(props.route)

    // show the different routes available for each stop
    return (
        <View style={busStyles.busRouteView}>
            <Text style={busStyles.busRouteTitle}>{route.RouteNo} {route.Direction} {route.RouteName}</Text>
            {route.Schedules.map((schedule, index) => (
                <BusSchedule key={index} schedule={schedule}></BusSchedule>
            ))}
        </View>
    )
}
