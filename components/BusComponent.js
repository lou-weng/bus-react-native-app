// import React from 'react'
// import { Text } from 'react-native'
// import * as Location from 'expo-location'
// import { API_KEY, URL } from '@env'

// class BusComponent extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             latitude: 0,
//             longitude: 0,
//             stops: [],
//             buses: []
//         }
//     }

//     // referenced from https://stackoverflow.com/questions/62975142/how-can-i-get-current-location-for-using-expo-location-api-with-react-native
//     async componentDidMount() {
//         try {
//             let { status } = await Location.requestForegroundPermissionsAsync()
//             if (status !== 'granted') {
//                 return
//             }
//             let location = await Location.getCurrentPositionAsync({})
//             this.setState({
//                 ...this.state,
//                 latitude: parseFloat(location.coords.latitude.toFixed(6)),
//                 longitude: parseFloat(location.coords.longitude.toFixed(6)),
//                 data: []
//             })
//             this.fetchStops()
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     fetchStops = async () => {
//         try {
//             let url = `${URL}?apikey=${API_KEY}&lat=${this.state.latitude}&long=${this.state.longitude}&radius=100`
//             const response = await fetch(url, {
//                 headers: {
//                     'accept': 'application/json'
//                 }})
//             const json = await response.json()
//             this.setState({
//                 stops: json
//             })
//             this.fetchBuses()
//         } catch (error) {
//             console.log(error)
//         }

//         // https://api.translink.ca/rttiapi/v1/stops/59587/estimates?apikey=31Z2KlibdtLWpif0eIHL
//     }

//     fetchBuses = async () => {
//         try {
//             let promises = this.state.stops.map(stop => {
//                 let url = `${URL}/${stop.StopNo}/estimates?apikey=${API_KEY}`
//                 return fetch(url, {
//                     headers: {
//                         'accept': 'application/json'
//                     }
//                 })
//             })

//             let responses = await Promise.all(promises)
//             let result = responses.map(response => response.json())
//             let buses = await Promise.all(result)
//             this.setState({
//                 buses: buses
//             })

//             // let url = `${URL}/${this.state.stops[0].StopNo}/estimates?apikey=${API_KEY}`
//             // const response = await fetch(url, {
//             //     headers: {
//             //         'accept': 'application/json'
//             //     }})
//             // const json = await response.json()
//             // this.setState({
//             //     buses: json
//             // })
//             // console.log(json)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     render() {
//         return (
//             <>
//                 <Text>Hello There!</Text>
//                 <Text>Hello {this.state.latitude} and {this.state.longitude}</Text>
//                 { this.state.stops.map(item=> {
//                     return <Text key={item.StopNo}>{item.Name} and {item.StopNo}</Text>
//                 })}
//                 {console.log(this.state.buses)}
//                 {/* { this.state.buses.map(bus => {
//                     console.log(bus.length)
//                     let i = 0
//                     // console.log(bus[0])
//                     // for (let i = 0; i < bus.length; i++) {
//                     //     return <Text>{bus[i].RouteNo} {bus[i].Direction} {bus[i].Schedules[i].ExpectedLeaveTime} {bus[i].RouteName}</Text>
//                     // }
                    
//                     // bus.map(item => {
//                     //     return <Text>{item.RouteName}</Text>
//                     //     // item.Schedules.map(times => {
//                     //     //     return <Text>{times}</Text>
//                     //     // })
//                     // })
//                 })} */}
//             </>
//         )
//     }
// }

// export default BusComponent