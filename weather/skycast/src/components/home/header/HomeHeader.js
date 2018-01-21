import React from 'react';
import Autocomplete from './Autocomplete';
import PreviousSearches from './PreviousSearches';
import HeaderAuth from './HeaderAuth';
import './HomeHeader.css';

class HomeHeader extends React.Component {
    render() {
        return (
            <div className="HomeHeader">
                <div className="HomeHeaderContent">
                    <div className="HomeHeaderLeft">
                        <div className="HomeHeaderTitleBox">
                            <h1 className="HomeHeaderTitle">SkyCast</h1>
                        </div>
                        <Autocomplete />
                        <PreviousSearches />
                    </div>
                    <HeaderAuth />
                </div>
            
            </div>
        );
    }
}

export default HomeHeader;