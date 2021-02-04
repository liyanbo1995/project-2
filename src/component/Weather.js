import React from 'react';
import Axios from 'axios';
import Weather_body from "./Weather_body";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/style.css'
import {Card,Button,Row,Col,Container} from "react-bootstrap";

const API_key = '95cb5367adec4fce0c50ae88f92f6d82';
const city = 'Sydney';
//const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&appid=${API_key}`;
const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${API_key}`;


class Weather extends React.Component{
    constructor(){
        super()
        this.state ={
            temp:'',
            city:'',
            visibility:'',
            humidity:'',
            wind_speed:'',
            city:'',
        }
    }
    async componentDidMount(){
        //API call
        const res = await Axios.get(weatherApi)
        const {data: {main: {temp } } } = res
        const {data: {weather:{0:{main}} } } = res
        const {data: {main: {humidity } } } = res
        const {data: {wind: {speed } } } = res
        const {data: {name } } = res

        this.setState({
            temp:Math.round(temp),
            visibility:main,
            humidity:humidity,
            wind_speed:speed,
            city:name,
        })
        //console.log(res.data);
    }
    
    render(){
        return(
            <main>
                <Card className = "weather-card">
                    <Card.Header className="weather-card_header">
                        <Container>
                            <Row>
                                <Col>
                                    <Row>
                                        <h1 className = "weather-card_temperature">{this.state.temp}°</h1>
                                    </Row>
                                        <h1 className = "weather-card_visibility">{this.state.visibility}</h1>
                                    <Row>
                                        <Row><h1 className = "weather-card_humidity">HUMIDITY</h1></Row>
                                        <Row><h1 className = "weather-card_humidity_percent">{this.state.humidity}%</h1></Row>
                                        <Row><div className="vl"></div></Row>
                                        <Row><h1 className = "weather-card_wind">WIND</h1></Row>
                                        <Row><h1 className = "weather-card_wind_speed">{this.state.wind_speed}m/s</h1></Row>
                                    </Row>
                                </Col>
                                <Col>
                                    <h1 className = "weather-card_city">{this.state.city}</h1>
                                    <hr></hr>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Weather_body/>
                </Card>
            </main>
        )
    }
}





export default Weather