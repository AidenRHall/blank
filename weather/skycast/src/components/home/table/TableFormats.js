import React from 'react';
import moment from 'moment-timezone';
import Skycons from 'react-skycons';

export const title = (type) => ({time, icon}) => {
    let formatIcon = icon.toUpperCase().split('-').join('_');
    let now = moment(time, 'X').tz('US/Eastern');
    let timeDisplay;
    let day;
    if (type === 'hourly') {
        timeDisplay = now.format('h a').toUpperCase();  
        day = now.format('dddd').slice(0, 3).toUpperCase();  
    } else {
        timeDisplay = now.format('dddd').slice(0, 3).toUpperCase(); 
        day = now.format('MM/DD').toUpperCase();
    }
    return (
       <div style={{
            display: 'flex',
            position: 'relative',
            width: '100px',
            justifyContent: 'space-between'}}>
        <div style={{margin: '-8px 0px 0px -20px'}}>
            <b>{timeDisplay}</b>
            <div style={{opacity: '0.7'}}>
                {day}
            </div>
        </div>
        <div style={{
            width: '50%',
            right: '-20px',
            top: '8px',
            position: 'absolute',
            padding: '0px',
        }}> 
            <Skycons 
                color='grey' 
                icon={formatIcon} 
                autoplay={true}
            />
        </div>
      </div>
    )
}

export const description = ({summary}) => {
    return (
        <div style={{
            minWidth: '80px',
            fontSize: '16px',
            color: '#393939'
            }}
        >
            {summary}
        </div>
    )
}

export const temperature = ({temperature}, style) => {
    return (
        <div>
            <b>{Math.round(temperature) || 0}</b>
            <span className="TableFCircle"><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
            </span>
        </div>
    )
}

export const feels = ({apparentTemperature}, style) => {
    return (
        <div style={{color: '#999'}}
            >
            <b>{Math.round(apparentTemperature) || 0}</b>
            <span className="TableFCircle"><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
            </span>
        </div>
    )
}

export const precipitation = ({precipProbability}) => {
    return (
        <div>
            {Math.round(precipProbability * 100) || 0}%
        </div>
    );
}

export const humidity = ({humidity}) => {
    return (
        <div>
            {Math.round(humidity * 100) || 0}%
        </div>
    );
}

const getDir = (bearing) => {
    if (bearing > 338 || bearing < 23) {
        return 'N';
    } else if (bearing < 68) {
        return 'NE';
    } else if (bearing < 113) {
        return 'E';
    } else if (bearing < 188) {
        return 'SE';
    } else if (bearing < 203) {
        return 'S';
    } else if (bearing < 248) {
        return 'SW';
    } else if (bearing < 293) {
        return 'W';
    } else {
        return 'NW';
    }
}

export const wind = ({windSpeed, windBearing}) => {
    return (
        <div style={{width: '73px'}}>
            {Math.round(windSpeed) || 0} mph {getDir(windBearing)} 
        </div>
    )
}

export const highLow = (props) => {
    return (
        <div>
            <b>{Math.round(props.temperatureHigh) || 0}</b>
            <span className="TableFCircle"><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                /> 
            </span>
            &nbsp;/
            <b> {Math.round(props.temperatureLow) || 0}</b>
            <span className="TableFCircle"><i 
                className="WeatherNowBoxStatsI fa fa-circle-o" 
                aria-hidden="true"
                style={{position: 'relative'}}
                />
            </span>
        </div>
    )
}
