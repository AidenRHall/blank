import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Error from './Error';
import { SessionButton } from './buttons'; 
import { newUserDisplay, existingUserDisplay } from './displays';
import './Session.css';
import {
    signIn, 
    signUp, 
    updateSessionFormError,
} from '../../redux/actions';

class Session extends React.Component {
    state = {username: '', password: ''};

    componentWillReceiveProps(nextProps){
        // clear forms and error if user switches from login to signin
        if (this.props.location.pathname !== nextProps.location.pathname){
            this.setState({username: '', password: ''});
            this.props.clearError();
        }
    }

    getDisplay = () => {
        const url = this.props.location.pathname
        return url === '/signup' ? newUserDisplay() : existingUserDisplay()
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {signIn, signUp} = this.props;
        const data = this.state;
        const url = this.props.location.pathname
        url === '/signin' ? signIn(data)  : signUp(data);
    }

    ready = () => {
        const {username, password} = this.state;
        return username && password;
    }

    render() {
        const { errorMsg, loggedIn } = this.props;
        const { handleSubmit, handleChange } = this;
        const { username, password } = this.state;
        return loggedIn ? <Redirect to="/"/> : (
            <div className="Session">
                <div className="SessionHeader">
                    <h2><a href="#/">SkyCast</a></h2>
                </div>
                <div className="SessionMain">
                    {this.getDisplay()}
                    <form action="post" onSubmit={handleSubmit}>
                        <div className="SessionMainLabel"><b>Username</b></div>
                        <input 
                            placeholder="Username" 
                            name="username"
                            type="text" 
                            value={username}
                            onChange={handleChange}
                            spellCheck={false}
                        />
                        <div className="SessionMainLabel"><b>Password</b></div>
                        <input 
                            placeholder="Password" 
                            name="password"
                            type="password" 
                            value={password}
                            onChange={handleChange}
                            spellCheck={false}
                        />
                        <div className="SessionButtonWrap">
                        <div className="SessionError">
                            <Error visable={errorMsg !== ''}>
                                {errorMsg}
                            </Error>
                        </div>
                        <SessionButton enabled={this.ready()} msg="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// Redux 

const mapStateToProps = state => {
    return {
        errorMsg: state.sessionForm.error,
        loggedIn: !!state.session.username, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (data) => {
            return dispatch(signIn(data));
        },
        signUp: (data) => {
            return dispatch(signUp(data));
        },
        clearError: () => {
            return dispatch(updateSessionFormError(''))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Session));