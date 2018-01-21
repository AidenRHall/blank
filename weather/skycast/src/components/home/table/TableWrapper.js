import React from 'react';
import { connect } from 'react-redux';
import CreateTable from './CreateTable';
import './TableWrapper.css';

class TableWrapper extends React.Component {
    state = {tableType: 'hourly'}
    setTableType = (type) => () => this.setState({tableType: type});
    getStyle = (type) => this.state.tableType === type ? {backgroundColor: '#5da3ac', color: 'white'} : {};

    getTableData = () => {
        const {tableType} = this.state;
        const {showingHistory, daily, hourly} = this.props;
        let data;
        if (tableType === 'daily') {
            if (showingHistory) {
                data = daily.slice(1);
            } else {
                data = daily;
            }
        } else {
            if (showingHistory) {
                data = hourly.slice(11); 
            } else {
                data = hourly.slice(1, 12);
            }
        }       
        return data;
    }

    render() {
        if (this.props.daily.length === 0) return null;
        const { tableType } = this.state;
        const { setTableType, getStyle, getTableData } = this;
        const data = getTableData();
        return (
            <div className="TableWrapper">
                <div className="TableButtons">
                    <div className="ToggleTableButtonWrap">
                    <div 
                        style={getStyle('hourly')} 
                        onClick={setTableType('hourly')} 
                        className="ToggleTable"
                    >
                        Hourly 
                    </div>
                    <div 
                        style={getStyle('daily')} 
                        onClick={setTableType('daily')} 
                        className="ToggleTable"
                    >
                        Daily
                    </div>
                    </div>
                </div>
                <CreateTable
                    type={tableType}
                    data={data}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        daily: state.weather.daily,
        hourly: state.weather.hourly,
        showingHistory: state.weather.showingHistory,
    }
}


export default connect(mapStateToProps, null)(TableWrapper);