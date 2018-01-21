
import * as React from 'react';
import SessionHeader from './SessionHeader';
import SessionFooter from './SessionFooter';
import './Glitch.css';
const background = require('../../assets/mountain.jpeg');

class Glitch extends React.Component {
    style = { backgroundImage: `url(${background}` };

    render() {
        return (
            <div className="Glitch">
                <div className="GlitchBackground" style={this.style} />
                <SessionHeader />
                <div className="GlitchMsg">
                <h1>
                   <i className="fa fa-exclamation-triangle" aria-hidden="true"/>
                    You've found a Glitch!</h1>
                   <p> You've found yourself in a wierd place.</p>
                   <p> Probably not the place you were looking for.</p>
                </div>
                <div className="GlitchFooterWrap">
                    <SessionFooter />
                </div>
            </div>
        );
    }
}
export default Glitch;