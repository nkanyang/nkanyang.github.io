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
          today: "https://api.openweathermap.org/data/2.5/weather?q=Melbourne,au&appid=22fbcfec719c609ea81403ee2aeac5de&units=metric",
          forecast: "https://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au&appid=22fbcfec719c609ea81403ee2aeac5de&units=metric"
    }
    this.chooseCity = this.chooseCity.bind(this);
    // this.getWeather("Melbourne");
  }

  async getWeather(city){
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();
    const count = data.cnt;
    for(let i = 0; i < count; i+8){
      console.log(data.list[i]);
    }

    // console.log("getWeather:"+data.main.temp);
    // let weatherData = {"temp":0};
    // weatherData.temp = 
    // data.main.temp;
    // console.log(weatherData);
    // this.setState({today:weatherData});

    // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    //    .then(response => response.json())
    //     .then(data => this.setState({today:data}))
    //     .catch(error => console.log(error));

    // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    //     .then(response => response.json())
    //       .then(data => this.setState({forecast:data}))
    //       .catch(error => console.log(error));
}

  chooseCity(city){
    console.log("City is "+ city); 
    if(this.state.city === city){
      console.log("no need to refresh");
      return;
    }
    //get data here

    const todayUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`;
    this.setState({
      "city":city,
      "today":todayUrl,
      "forecast":forecastUrl
    });
  }

  render(){
    return(
      <div className="weather">
        <CityCard onClick={this.chooseCity} active={this.state.city}></CityCard>
        <Today url={this.state.today}/>
        <Forecast url={this.state.forecast}/>
      </div>
    );
  }
}

export default Weather;