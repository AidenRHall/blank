import React from 'react';
import './Error.css';

class Error extends React.Component {
    render() {
        return !this.props.visable ? null :
         (
            <div className="Error">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"/>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Error;
