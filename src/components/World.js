import React from 'react';
import axios from 'axios';


class World extends React.Component{


    constructor(){
        super()

        this.state={
            worldData:[]
        }
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries')
        .then(response =>{
            this.setState({worldData:response.data});
        })
    }

    render(){
        return(

            <div className ="row">
                <div className ="col-md-12">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <td>Country Name</td>
                                <td>Total cases</td>
                                <td>Active cases</td>
                                <td>Recovered cases</td>
                                <td>Total deaths</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.worldData.map((item,key)=>{
                                return(
                                    <tr>
                                        <td>{item.country}
                                        <img style={{width:'20px',height:'20px'}} src={item.countryInfo.flag}/>
                                        </td>
                                        <td>{item.cases}</td>
                                        <td>{item.todayCases}</td>
                                        <td>{item.recovered}</td>
                                        <td>{item.deaths}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            
        )
    }
}

export default World;