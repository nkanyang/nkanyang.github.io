import React from "react";
import styles from "./style.module.css";
import "../weather.css";
import clear from "../../images/icons/clear.svg";
import rain from "../../images/icons/rain.svg";
import cloudy from "../../images/icons/cloudy.svg";

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const weatherPic = {
   "Clear":clear,
   "Rain":rain,
   "Clouds":cloudy
 };

function Day({data,key}){
//  console.log(data);
  if(!data){
    return(
      <div className={styles.day}>
      <div className="loadding"></div>
      </div>
    );
  }

  const src = weatherPic[data.weather];
  const date = new Date(data.seconds*1000);
  return(
    <div className={styles.day}>
      <div>{week[date.getDay()]}</div>
      <div>{data.temp}℃</div>
      <div>{data.weather}</div>
      <img src={src} alt="clear"></img>
    </div>
  );
}

function Forecast({data}){
//  console.log("forecast: " + data);
  if(!data){
    console.log("forecast data undefined ");
    return(
      <div className={styles.container}>  
      <Day></Day>
      <Day></Day>
      <Day></Day>
      <Day></Day>
      <Day></Day>
      </div>
    );
  }

  const forecast = [];
  for(let i = 7; i < data.cnt; i += 8){
    const current = data.list[i];
    const currentWeather={
            "temp": Math.round(current.main.temp),
            "tempMin": current.main.temp_min,
            "tempMax": current.main.temp_max,
            "weather": current.weather[0].main,
            "seconds": current.dt
            };
    forecast.push(currentWeather);
//    console.log(currentWeather);
  }

  return(
    <div className={styles.container}>        
      {
        forecast.map((item,index) => {
          return(
            <Day data={item} key={index}></Day>
          );})
        }
    </div>
  );
}


export default Forecast;