import React from "react";
import styles from "./style.module.css";
import "../weather.css";

function Today({data}){
   if(!data){
    console.log("today data undefined ");
    return(
      <div className={styles.container}>
        <div className="loadding"></div>
      </div>
    );
   }

  const currentDate = new Date();
  const weather={
    "temp": Math.round(data.main.temp),
    "tempMin": Math.round(data.main.temp_min),
    "tempMax": Math.round(data.main.temp_max),
    "city": data.name,
    "weather": data.weather[0].main,
    "date": currentDate.toDateString()
  };

  //  console.log("this.props.url"+this.props.url);
    return(
      <div className={styles.container}>
        <div className={styles.cityname}>
          {weather.city}
        </div>
        <div className={styles.weather}>
          {weather.weather}
        </div>
        <div className={styles.temperature}>
            {weather.temp} ℃
        </div>
        <div className={styles.minmax}>
            {weather.tempMin}℃ ~ {weather.tempMax}℃
        </div>
        <div className={styles.date}>
          {weather.date}
        </div>
      </div>
    );
}

export default Today;