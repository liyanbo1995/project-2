import React from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/style.css'
import {Card,Button,Row,Col,Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt,faSmog,faWind,faCloud,faSun,faCloudShowersHeavy, } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';
//import 'moment-timezone';


const API_key = '95cb5367adec4fce0c50ae88f92f6d82';
const city = 'Sydney';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&appid=${API_key}`;

//const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${API_key}`;

class Weather_body extends React.Component{
    constructor(){
        super()
        this.state ={
           weekday1:'',
           weekday2:'',
           weekday3:'',
           weekday4:'',
           weekday5:''
        }
    }
    componentDidMount(){
        //API call
        Axios
        .get(api)
        .then(response =>{
            this.setState({
                weekday1:response.data.list[3].dt_txt,
                weekday2:response.data.list[11].dt_txt,
                weekday3:response.data.list[19].dt_txt,
                weekday4:response.data.list[27].dt_txt,
                weekday5:response.data.list[35].dt_txt,
            })

            /*temp对应日期*/
            console.log(Math.round(response.data.list[3].main.temp));
            console.log(Math.round(response.data.list[11].main.temp));
            console.log(Math.round(response.data.list[19].main.temp));
            console.log(Math.round(response.data.list[27].main.temp));
            console.log(Math.round(response.data.list[35].main.temp));

              /*weather对应日期*/
            
              console.log(response.data.list[3].weather[0].main);
              console.log(response.data.list[11].weather[0].main);
              console.log(response.data.list[19].weather[0].main);
              console.log(response.data.list[27].weather[0].main);
              console.log(response.data.list[35].weather[0].main);

            
            

          
          
            
        })
    }

    render(){
        return(
                <Card.Body className="weather-card_body">
                    <Card.Text className="">
                        {/*<FontAwesomeIcon className="weather-icons" icon={faWind} />
                        <FontAwesomeIcon className="weather-icons" icon={faBolt} />
                        <FontAwesomeIcon className="weather-icons" icon={faSmog} />
                        <FontAwesomeIcon className="weather-icons" icon={faCloud} />
                        <FontAwesomeIcon className="weather-icons" icon={faSun} />
                        <FontAwesomeIcon className="weather-icons" icon={faCloudShowersHeavy} />*/}

                        <Container>
                            <Row>

                                    <Col>
                                        <Col>
                                            <Moment className="weather-card_weekday1" format="dddd">{this.state.weekday1}</Moment>
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon className="weather-icons" icon={faCloud} />
                                        </Col>
                                    </Col>
                                    <Col>
                                        <Col>
                                            <Moment className="weather-card_weekday2" format="dddd">{this.state.weekday2}</Moment>
                                        </Col>
                                        <Col>   
                                            <FontAwesomeIcon className="weather-icons" icon={faCloud} />
                                        </Col>
                                    </Col>
                                    <Col>
                                        <Col>
                                            <Moment className="weather-card_weekday3" format="dddd">{this.state.weekday3}</Moment>
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon className="weather-icons_sun" icon={faSun} />
                                        </Col>
                                    </Col>
                                    <Col>
                                        <Col>
                                            <Moment className="weather-card_weekday4" format="dddd">{this.state.weekday4}</Moment>
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon className="weather-icons_shower" icon={faCloudShowersHeavy} />
                                        </Col>
                                    </Col>
                                    <Col>
                                        <Col>
                                            <Moment className="weather-card_weekday5" format="dddd">{this.state.weekday5}</Moment>
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon className="weather-icons_shower" icon={faCloudShowersHeavy} />
                                        </Col>
                                    </Col>
                                
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
        )
    }
}

export default Weather_body