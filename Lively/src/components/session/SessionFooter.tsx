import * as React from 'react';
import './SessionFooter.css';

class SessionFooter extends React.Component {
    render() {
        return (
            <div className="SessionFooter">
                <div className="SessionFooterLinks">
                    <a 
                        href="https://www.linkedin.com/in/nathan-vass-4b9490132/" 
                        className="SessionFooterItem"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="http://www.nathanvass.site/" 
                        className="SessionFooterItem"
                    >
                        Portfolio
                    </a>
                    <a 
                        href="https://angel.co/nathan-vass?public_profile=1"
                        className="SessionFooterItem"
                    >
                        AngelList
                    </a>
                    <a 
                        href="https://github.com/th3nathan" 
                        className="SessionFooterItem"
                    >
                        Github
                    </a>
                </div>
            </div>
        );
    }
}
export default SessionFooter;