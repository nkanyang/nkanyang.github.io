import React from "react";
import styles from "./style.module.css";

class Today extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    // this.apiCall();
  }

  async apiCall(url){
  //  console.log("api fetch: "+url);
    const response = await fetch(url);
    const data = await response.json();
    // console.log("api call: "+ data.main.temp);
    const currentDate = new Date();
    this.setState({
      "temp": Math.round(data.main.temp),
      "tempMin": Math.round(data.main.temp_min),
      "tempMax": Math.round(data.main.temp_max),
      "city": data.name,
      "weather": data.weather[0].main,
      "date": currentDate.toDateString()
    });

    console.log(data.weather[0].main);
  }
  componentDidMount(){
    this.apiCall(this.props.url);
  }
  
  componentWillReceiveProps(nextProps, prevState){
    this.apiCall(nextProps.url);
  }
  render(){
  //  console.log("this.props.url"+this.props.url);
    return(
      <div className={styles.container}>
        <div className={styles.cityname}>
          {this.state.city}
        </div>
        <div className={styles.weather}>
          {this.state.weather}
        </div>
        <div className={styles.temperature}>
            {this.state.temp} ℃
        </div>
        <div className={styles.minmax}>
            {this.state.tempMin}℃ ~ {this.state.tempMax}℃
        </div>
        <div className={styles.date}>
          {this.state.date}
        </div>
      </div>
    );
}

}

export default Today;