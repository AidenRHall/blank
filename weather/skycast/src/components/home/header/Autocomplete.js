import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux';
import { addQuery, setLocation, postQuery, fetchCurrentWeather } from '../../../redux/actions';
import './Autocomplete.css';

class Autocomplete extends React.Component {
    state = {address: ''}

    onChange = (address) => this.setState({ address })

    handleFormSubmit = async address => {
        this.setState({address});
        try {
            let geolocation = await geocodeByAddress(this.state.address);
            let latLng = await getLatLng(geolocation[0]);
            let query = {...latLng, name: this.state.address};
            if (this.props.loggedIn) {
                this.props.postQuery(query);
            } else {
                this.props.addQuery(query);
            }
            this.props.fetchCurrentWeather(query);
            console.log('Success', latLng);
        } catch(err) {
            console.error('Error', err);
        }
    }

    render() {
        const myStyles = {
            root: { position: 'absolute', top: '20px' },
            input: { width: '224px', fontSize: '17px' },
            autocompleteContainer: { width: '224px', margin: '0', padding: '0', border: 'none' },
            autocompleteItem: { width: '224px', color: 'black', fontSize: '15px' },
            autocompleteItemActive: { color: '#3437d4' },
            // googleLogoContainer: {display: 'none'}
        }
    
        const inputProps = {
            value: this.state.address,
            placeholder: 'Enter a location',
            onChange: this.onChange,
        }
        return (
            <div className="Autocomplete">
                <i className="fa fa-search" aria-hidden="true"></i>
                <form onSubmit={this.handleFormSubmit}>
                <PlacesAutocomplete 
                    inputProps={inputProps} 
                    onSelect={this.handleFormSubmit} 
                    styles={myStyles} 
                />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.session.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuery: query => dispatch(addQuery(query)),
        postQuery: query => dispatch(postQuery(query)),
        setLocation: query => dispatch(setLocation(query)),
        fetchCurrentWeather: (query) => dispatch(fetchCurrentWeather(query)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Autocomplete);