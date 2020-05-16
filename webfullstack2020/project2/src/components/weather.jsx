import React from "react";
import "./weather.css";
import CityCard from "./city/citycard";
import Today from "./today/today";
import Forecast from "./forecast/forecast";

const API_KEY = "22fbcfec719c609ea81403ee2aeac5de";
const country = "au";

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state={
          city: "Melbourne",
          weatherToday: {},
          forecast: {},
          todayDataReady: false,
          forecastReady: false

    }
    this.chooseCity = this.chooseCity.bind(this);
  }

  getWeather(city){
    // const apiToday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const weatherToday = await apiToday.json();
    // const apiForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const forecast = await apiForecast.json();
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
       .then(response => response.json())
        .then(data => this.setState({
          "weatherToday": data,
          "todayDataReady": true
        }))
        .catch(error => console.log(error));

    console.log(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
      .then(data => this.setState({
        "forecast": data,
        "forecastReady": true
      }))
      .catch(error => console.log(error));   
}

  chooseCity(city){
    console.log("City is "+ city); 
    if(this.state.city === city){
      console.log("no need to refresh");
      return;
    }

    this.getWeather(city);
    this.setState({
      "city":city,
      "todayDataReady": false,
      "forecastReady": false
    });
  }

  componentDidMount(){
    this.getWeather(this.state.city);
  }

  render(){
    return(
      <div className="weather">
        <CityCard onClick={this.chooseCity} active={this.state.city}></CityCard>
        <Today data={this.state.todayDataReady?this.state.weatherToday:undefined}/>
        <Forecast data={this.state.forecastReady?this.state.forecast:undefined}/>
      </div>
    );
  }
}

export default Weather;