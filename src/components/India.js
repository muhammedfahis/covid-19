import React from 'react';
import {Card} from 'react-bootstrap';
import State from './Statedata';
import axios from 'axios';


class India extends React.Component{

    constructor(){
        super();

        this.state ={

            india :{}
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries/india')
        .then(response =>{
            this.setState({india:response.data});
        })
    }

    render(){
        return(
            <div className= "container-fluid">
                <div className= 'col-md-12'>
                    <div className ='row'>
                        <img src= 'https://www.countryflags.io/IN/shiny/64.png'/>
                    </div>
                        <h3>India</h3>
                    <div className ="col-md-12">
                        <div className = 'row'>
                    <div className ="col-md-3">
                    <Card className ="badge badge-primary" style={{ width: '18rem' }}>
                        <Card.Body className ="text-center">
                            <Card.Title>Total cases</Card.Title>
                            <h3>{this.state.india.cases}</h3>
                            <Card.Text className="">
                                today[{this.state.india.todayCases}]
                            </Card.Text>
                        </Card.Body>
                        </Card>

                        
                    </div>

                    <div className ="col-md-3">
                    <Card className ="badge badge-warning" style={{ width: '18rem' }}>
                        <Card.Body className ="text-center">
                            <Card.Title>Active cases</Card.Title>
                            <h3>{this.state.india.active}</h3>
                            <Card.Text className="">
                            </Card.Text>
                        </Card.Body>
                        </Card>

                        
                    </div>

                    <div className ="col-md-3">
                    <Card className ="badge badge-success" style={{ width: '18rem' }}>
                        <Card.Body className ="text-center">
                            <Card.Title>Recovered cases</Card.Title>
                    <h3>{this.state.india.recovered}</h3>
                            <Card.Text className="">
                                today[{this.state.india.todayRecovered}]
                            </Card.Text>
                        </Card.Body>
                        </Card>

                        
                    </div>

                    <div className ="col-md-3">
                    <Card className ="badge badge-danger" style={{ width: '18rem' }}>
                        <Card.Body className ="text-center">
                            <Card.Title>Total Deaths</Card.Title>
                            <h3>{this.state.india.deaths}</h3>
                            <Card.Text className="">
                                today[{this.state.india.todayDeaths}]
                            </Card.Text>
                        </Card.Body>
                        </Card>

                        
                    </div>
                        </div>
                    </div>
                </div>
                <div className ="col-md-12">
                    <State/>
                </div>
            </div>
        )
    }
}

export default India;