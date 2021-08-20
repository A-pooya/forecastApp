import React, { useState } from 'react';
import {getLocationApi}  from "./api/locationApi";
import {getForecastApi , postForecastApi}  from "./api/forecastApi";
import {toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useStyle} from "./style";
import ShowWeatherStatus from "./components/weatherStatus"
import { Typography } from '@material-ui/core';


const App = () => {
    const classes = useStyle();

const [cityCode , setCityCode] = useState();
const [forecastData , setForecastData] = useState([]);
const [inputCity , setinputCity] = useState();

const city = (e)=>{
    
        console.log(e.target.value);
        return setinputCity(e.target.value);
}



const handleLocationApi = () => {
    if(inputCity){
    getLocationApi(inputCity ,(isok , data) => {
        if (isok){
        console.log(data.data[0].Key)
        const codeofcity = data.data[0].Key
        setCityCode(codeofcity);
        return setinputCity("");
        }
        console.log(data);
    })
  }
    else{
        toast.warn("please write your city first")

    }
}

const handleForecastApi = () => {
    getForecastApi(cityCode,(isok , data) => {
        if (isok){
        const DailyForecasts = data.data.DailyForecasts
        setForecastData(DailyForecasts);
            postForecastApi(DailyForecasts , (isok , data) => {
                if(isok){
                return toast.success("your api saved")
            }
            return toast.error("there is a problem in data saving procedure")
        })
        }
        console.log(data);
    })
}


    return ( 
        <>
            <div className={classes.container}>
                <div>
                <button type="submit" className={classes.apiBtn} onClick ={handleLocationApi}>get location Api</button>
                <input type={"text"} placeholder={"write your city"} className={classes.cityInput} onChange = {city} value={inputCity}></input> 
                {/* <p className={classes.TG}>in default situation app consider london as city</p>    */}
                </div>
                <button type="submit" className={classes.apiBtn} onClick ={handleForecastApi}>get forecast Api </button>
            </div>
            <ShowWeatherStatus forecastData ={forecastData} ></ShowWeatherStatus>
            <ToastContainer/> 
        </>
     );
}
 
export default App;