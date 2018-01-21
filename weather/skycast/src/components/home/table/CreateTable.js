import React from 'react';
import {
    title,
    description,
    temperature,
    feels,
    precipitation,
    humidity,
    wind,
    highLow
} from './TableFormats';
import './CreateTable.css';

class CreateTable extends React.Component {
    hourly = [
        {func: title('hourly'), field: 'Time'}, 
        {func: description, field: 'Description'}, 
        {func: temperature, field: 'Temp'}, 
        {func: feels, field: 'Feels'}, 
        {func: precipitation, field: 'Precip'},
        {func: humidity, field: 'Humidity'}, 
        {func: wind, field: 'Wind'},
    ];
    daily = [
        {func: title('daily'), field: 'Day'}, 
        {func: description, field: 'Description'}, 
        {func: highLow, field: 'High/Low'}, 
        {func: precipitation, field: 'Precip'},    
        {func: wind, field: 'Wind'},
        {func: humidity, field: 'Humidity'}, 
    ];
    
    render() {
        let format = this.props.type === 'hourly' ? this.hourly : this.daily;
        const {data} = this.props;
        let header = (
            <tr>
                {format.map((colFormat, i) => 
                    <th key={i}>{colFormat.field}</th>
                )}
            </tr>
        )
        let rows = data.map((dataRow, i) => {
            return ( <tr key={i}>
                {format.map((colFormat, j) => {
                    return (
                        <td key={j}>
                            {colFormat.func(dataRow, j)}
                        </td>
                    )
                })}
            </tr>
            )
        })
        return (
            <table>
                <thead>
                    {header}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )     
    }
}

export default CreateTable;