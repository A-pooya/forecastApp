import React, { useState } from 'react';
import {getLocationApi}  from "./api/locationApi";
import {getForecastApi , postForecastApi}  from "./api/forecastApi";
import {toast , ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useStyle} from "./style";

const App = () => {
    const classes = useStyle();

const [cityCode , setCityCode] = useState();

const handleLocationApi = () => {
    getLocationApi((isok , data) => {
        if (isok){
        console.log(data.data[0].Key)
        const codeofcity = data.data[0].Key
        return setCityCode(codeofcity)
        }
        console.log(data);
    })
}

const handleForecastApi = () => {
    getForecastApi(cityCode,(isok , data) => {
        const DailyForecasts = data.data.DailyForecasts
        
        if (isok){
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
                <button type="submit" className={classes.apiBtn} onClick ={handleLocationApi}>get location Api</button>
                <button type="submit" className={classes.apiBtn} onClick ={handleForecastApi}>get forecast Api </button>
            </div>
            <ToastContainer/>
        </>
     );
}
 
export default App;