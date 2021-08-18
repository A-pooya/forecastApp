import Axios from "axios";

export const locationApi = () => {
    return Axios.create({
        baseURL:"http://dataservice.accuweather.com/locations/v1/cities/search",
    })
} 

export const forecastApi = () => {
    return Axios.create({
        baseURL:"http://dataservice.accuweather.com/forecasts/v1/daily/5day/",
    })
} 

export const saveforecastApi = () => {
    return Axios.create({
        baseURL:"http://localhost:3001",
    })
} 


