import React from 'react';
import { connect } from 'react-redux'
import HistoryChart from './HistoryChart'
import './ChartWrapper.css';

class ChartWrapper extends React.Component {
    state = {type: 'temperature'}

    setType = (type) => () => this.setState({type});  

    getStyle = (value) => {
        const {type} = this.state;
        if (value === type) {
            return {background: '#1D4E89'};
        } else {
            return {};
        }
    } 
    
    getData = () => {
        const {showingHistory, daily} = this.props;
        return showingHistory ? daily.slice(1) : daily;
    }

    render() {
        if (this.props.daily.length === 0) return null;
        const {type} = this.state;
        const {getStyle, setType} = this;
        const data = this.getData(); // daily only
        return  (
            <div className="ChartWrapper">
                <HistoryChart
                    data={data}
                    type={type}
                />
                <div className="ChartButtons">
                    <div className="ChartWrapperType">
                        <div 
                            style={getStyle('temperature')} 
                            onClick={setType('temperature')} 
                            className="ChartToggle"
                        >
                            Temperature 
                        </div>
                        <div 
                            style={getStyle('humidity')} 
                            onClick={setType('humidity')} 
                            className="ChartToggle"
                        >
                            Humidity
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        daily: state.weather.daily,
        showingHistory: state.weather.showingHistory,
    }
}

export default connect(mapStateToProps, null)(ChartWrapper);