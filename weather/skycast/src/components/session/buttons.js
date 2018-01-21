import * as React from 'react';
import './Buttons.css';

export const SessionButton = ({enabled, msg}) => {
    let className = enabled ? 'session' : 'sessiondisabled';
    return (
        <button type="submit" className={`Button ${ className }`}>
                {msg} <span> 
                <i className="fa fa-arrow-right"/>
                </span>
        </button>
    );
};