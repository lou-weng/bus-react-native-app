import { API_KEY, URL } from '@env'
import * as Location from 'expo-location'

export const getStops = async (latitude, longitude, radius) => {
    try {
        let url = `${URL}?apikey=${API_KEY}&lat=${latitude}&long=${longitude}&radius=${radius}`

        const responseObject = {
            headers: {
                'accept': 'application/json'
            }
        }

        // response object to get json back from API
        const response = await fetch(url, responseObject)
        return await response.json()
    } catch (err) {
        throw err
    }
}

export const getLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            return
        }
        let location = await Location.getCurrentPositionAsync({})
        return [parseFloat(location.coords.latitude.toFixed(6)), parseFloat(location.coords.longitude.toFixed(6))]
    } catch (error) {
        throw err
    }
}

export const getRoutes = async (stopNum) => {
    try {
        let url = `${URL}/${stopNum}/estimates?apikey=${API_KEY}&count=3`

        const responseObject = {
            headers: {
                'accept': 'application/json'
            }
        }

        // response object to get json back from API
        const response = await fetch(url, responseObject)
        return await response.json()
    } catch (err) {
        throw err
    }
}