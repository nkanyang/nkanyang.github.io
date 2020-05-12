import React from "react";
import styles from "./style.module.css";

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function Day({data,key}){
//  console.log(data);
  const date = new Date(data.seconds*1000);
  return(
    <div className={styles.day}>
      <div>{week[date.getDay()]}</div>
      <div>{data.temp}℃</div>
      <div>{data.weather}</div>
    </div>
  );
}

class Forecast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      forecast:[]
    };
  }

  async apiCall(url){
    console.log("api fetch forecast: "+url);
    const response = await fetch(url);
    const data = await response.json();
    const count = data.cnt;
    const forecast = [];
    for(let i = 7; i < count; i += 8){
      console.log(data.list[i]);
      const current = data.list[i];
      const currentWeather={
              "temp": Math.round(current.main.temp),
              "tempMin": current.main.temp_min,
              "tempMax":current.main.temp_max,
              "weather": current.weather[0].main,
              "seconds": current.dt
             };
      forecast.push(currentWeather);
      console.log(currentWeather);
    }
    this.setState({"forecast":forecast});
    }

  componentDidMount(){
    this.apiCall(this.props.url);
    console.log("forecast loading");
  }

  componentWillReceiveProps(nextProps, prevState){
    this.apiCall(nextProps.url);
  }

  render(){
    return(
      <div className={styles.container}>        
        {
          this.state.forecast.map((item,index) => {
            return(
              <Day data={item} key={index}></Day>
            );})
          }
      </div>
    );
    
    }
  }

export default Forecast;