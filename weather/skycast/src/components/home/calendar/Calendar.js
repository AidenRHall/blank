import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import moment from 'moment';
import { connect } from 'react-redux';
import {fetchCurrentWeather, fetchWeatherHistory} from '../../../redux/actions';
import 'react-infinite-calendar/styles.css';

class Calendar extends React.Component {
    handleSelect = (e) => {
        const {fetchCurrentWeather, fetchWeatherHistory, location} = this.props;
        let time = moment(e);
        let now = moment();
        if (time.format('MMDDYYYY') === now.format('MMDDYYYY')) {
            fetchCurrentWeather(location);
        } else {
            fetchWeatherHistory(location, time.unix());
        }
    }

    componentWillReceiveProps(newProps) {
        const {onHistory} = this.props;
        // makes calender reselect current day if app loads current forecast
        if (!onHistory) {
            this.forceUpdate()
        }
    }

    render (){
        const {handleSelect} = this;
        return !this.props.hasInitialData ? null : (
            <div className="CalenderWrap">
                <InfiniteCalendar 
                    width={490}
                    height={240}
                    onSelect={handleSelect}
                    theme={{
                        selectionColor: '#86bac1',
                        textColor: {
                        default: '#333',
                        active: '#FFF'
                        },
                        weekdayColor: '#1D4E89',
                        headerColor: 'rgb(127, 95, 251)',
                        floatingNav: {
                        background: '#9ED0E6',
                        color: '#FFF',
                        chevron: '#FFA726'
                        }
                    }}
                    displayOptions={{
                        showHeader: false,
                    }}
                    selected={new Date()}
                    maxDate={new Date()}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        location: state.weather.location,
        hasInitialData: !!state.weather.current,
        onHistory: state.weather.onHistory,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query)),
        fetchWeatherHistory: (query, time) => dispatch(fetchWeatherHistory(query, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)