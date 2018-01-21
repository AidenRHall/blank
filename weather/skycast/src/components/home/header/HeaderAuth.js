
import React from 'react';
import { connect } from 'react-redux';
import './HeaderAuth.css';
import { logout } from '../../../redux/actions';


class HeaderAuth extends React.Component {
    
    render() {
        const { loggedIn, username, logout } = this.props;
        if (loggedIn) {
            return (
                <div className="HeaderAuth">
                    <h4>Hi {username}!</h4>
                    <h4 style={{cursor: 'pointer'}} onClick={logout}>Log out</h4>
                </div>
            );
        } else {
            return (
                <div className="HeaderAuth HeaderAuthNotLoggedIn">
                    <h4><a href="#/signin">Log In</a></h4>
                    <h4><a href="#/signup">Sign Up</a></h4>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: !!state.session.username,
        username: state.session.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAuth);