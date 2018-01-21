import * as React from 'react';
import './SessionHeader.css';

const logo = require('../../assets/logo.png');

class SessionHeader extends React.Component {
    render() {
        return (
            <div className="SessionHeader">
                <a href="/" className="SessionHeaderLink flex">
                    <img src={logo}/>
                    <h2>Lively</h2>
                </a>
                <div className="SessionNavs flex">
                    <a href="/newteam">
                        Create a new workspace
                    </a>
                    <a href="#"> 
                        Try a demonstration
                    </a>
                </div>
            </div> 
        );
    }
}
export default SessionHeader;