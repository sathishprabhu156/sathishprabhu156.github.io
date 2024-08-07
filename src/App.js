import React, {Component} from "react";
import "./App.css";
import "./fontawesome.min.css";
import Weather from "./compontents/Weather";
import Form from "./compontents/Form";
import cloud from "./assets/clouds.png";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

  //   Key Api--------
const API_KEY = "50883ea96de0d5a374b6bd4583d75116";


class App extends Component {

  state = {
    Temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }


  //    Fetch api---------
  getWeather =  async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await  api.json();
    if (city) {
      this.setState({
        Temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
        
      })
    } else{
      this.setState({
        Temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter The City ...! '
      })
    }
  }

  render() { 
  return (
    <div className="wrapper">
      <div className="form-container" >
          <div className="head">
              <h2>React <span className="color">Weather</span> App</h2>
              <img className="cloud" src={cloud}></img>
              <br></br>
          </div>

          <Form getWeather={this.getWeather}/>

          <Weather 
          Temperature= {this.state.Temperature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          description= {this.state.description}
          error= {this.state.error}
          />
        
      </div> 
    </div>
  );
  }
}

export default App;
