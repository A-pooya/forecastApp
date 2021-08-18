import {forecastApi , saveforecastApi} from "./apis"

const key = "k07BDBtzvnYtHAp6FnGwXvhMxfgDYQzU"
const baseUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
//const query = `{${citycode}}`


export const getForecastApi = async (cityCode ,callback ) => {
    forecastApi().get(`${cityCode}?apikey=k07BDBtzvnYtHAp6FnGwXvhMxfgDYQzU`).then(response => {
        
        callback(true , response)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}
export const postForecastApi = (apiOfForecasts ,callback ) => {
    saveforecastApi().post("/saveForecastApi" ,apiOfForecasts).then(response => {
        
        callback(true , response)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}