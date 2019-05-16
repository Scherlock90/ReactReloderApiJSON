import React from 'react';
import axios from 'axios';
import './main.css';
import { LineChart, Line, CartesianGrid, Tooltip, Legend, XAxis, YAxis } from 'recharts';


let conutrCode = "Country Code";
let countryName = "Country Name";
let year = "Year";
export default class LoadJSonPoland extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      year: []      
    }
  }
  
  componentDidMount() {
    axios.get('https://pkgstore.datahub.io/core/population/population_json/data/43d34c2353cbd16a0aa8cadfb193af05/population_json.json')
      .then(res => {
        console.log(res.data.slice(11449, 11505));
        this.setState({
          year: res.data,
        })
      })
  }
  render() {
    const { year } = this.state;    
    const dataList = year.length ? (year.slice(11449, 11506).filter((album, i) => {
      return (
        <ul>
          {album.Year}
          {album.Value}
        </ul>
      );
    }).map(ee => ee)
    ) : (
        <div className="center">No data yet! </div>
    )
    return (
      <div className="containerLoader" style={containerLoader}>
        <div className="card z-depth-0 project-summary thumb">
          <div className="card-content grey-text text-darken-3 containerPost">
          </div>
          <DataThumb data={dataList} />
        </div>
      </div>
    )
  }
}

function DataThumb(props) {
  return (
    <LineChart width={730} height={250} data={props.data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Value" stroke="#8884d8" />
    </LineChart>
  )
}

const containerLoader = {
  display: 'flex',
  justifyContent: 'center',
}