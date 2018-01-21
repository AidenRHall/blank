import React from 'react';
import { connect } from 'react-redux';
import './PreviousSearches.css';
import { setLocation, fetchCurrentWeather } from '../../../redux/actions';

class PreviousSearches extends React.Component {
    state = {listShowing: false};
    
    constructList = () => {
        const {fetchCurrentWeather} = this.props;
        const action = query => () => {
            fetchCurrentWeather(query);
            this.setState({listShowing: false});
        }
        return this.props.queries.map((query, idx) => {
            return (
                <li onClick={action(query)} className="HistoryItem" key={idx}>
                    {query.name}
                </li>
            );
        });
    }
    toggleList = () => {
        if (this.props.queries.length === 0) {
            return this.setState({listShowing: false});
        } else {
            return this.setState({listShowing: (!this.state.listShowing)});
        }
    }

    render() {
        const {listShowing} = this.state;
        const style = {display: (listShowing ? 'block' : 'none')};
        return (
            <div className="PreviousSearches">
                <div className="HistoryListWrap">
                    <h2 onClick={this.toggleList}>Previous Searches</h2>
                    <ul className="HistoryList" style={style}>
                        {this.constructList()}
                    </ul>
                 </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        queries: state.queries.userQueries || [],
    }
}

const mapDispatchToProps = (dispatch) => ({
    setLocation: (query) => dispatch(setLocation(query)),
    fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviousSearches);
