import {locationApi} from "./apis"

const key = "k07BDBtzvnYtHAp6FnGwXvhMxfgDYQzU"
const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
const query = `?apikey=${key}&q=tehran`


export const getLocationApi = ( callback ) => {
    locationApi().get(query).then(response => {
        
        callback(true , response)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}