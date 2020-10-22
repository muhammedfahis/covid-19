import React from 'react';
import axios from 'axios';
import {Accordion,Card,Button} from 'react-bootstrap';


class State extends React.Component{
    constructor(){
        super();
        this.state ={
            stateData:{}
        }
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(response =>{
            this.setState({stateData:response.data});
        })
    }

    render(){

        let keys = Object.keys(this.state.stateData);

        return(
            <div className ="row">
                <div className ="col-md-12">

                <Accordion>
                    {
                        keys.map((item,key)=>{
                            let districts = this.state.stateData[item].districtData;
                            let district_key = Object.keys(districts);

                            let total_active =0;
                            let total_confirmed =0;
                            let total_recoverd =0;
                            let total_deaths = 0;
                            let district_list =[]
                            for(let x in districts){
                                total_active +=districts[x].active;
                                total_confirmed +=districts[x].confirmed;
                                total_recoverd +=districts[x].recovered;
                                total_deaths += districts[x].deceased;
                                let obj =districts[x];
                                obj['district_name'] =x;
                                district_list.push(obj);
                            }
                            // console.log(district_list);
                            return(

                                <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                            {item}      - <span className="btn-secondary p-1 mr-2">total confirmed   {total_confirmed}  </span>  <span className="btn-danger p-1 mr-2">total active   {total_active}  </span>  <span className="btn-danger p-1 mr-2">total recovered   {total_recoverd}     total deaths    {total_deaths}</span>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={key}>
                        <Card.Body>
                            <table className ="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <td>District</td>
                                    <td>Total cases</td>
                                    <td>Active cases</td>
                                    <td>recovered </td>
                                    <td>total Deaths</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {district_list.map((item,key)=>{
                                        return(
                                            <tr>
                                                <td>{item.district_name}</td>
                                                <td>{item.active}</td>
                                                <td>{item.confirmed}</td>
                                                <td>{item.recovered}</td>
                                                <td>{item.deceased}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
  


                            )

                        })
                    }
                     </Accordion>
  

                </div>
            </div>
        )
    }
}

export default State;