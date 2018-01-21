import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
// import Home from './home';
import Signin from '../components/session/Signin';
import TeamEntry from '../components/session/TeamEntry';
import Session from '../components/session/Session';
import Home from '../components/App';
import NewTeam from '../components/newteam/NewTeam';
export default () => (
    <BrowserRouter> 
        <Switch>
            <Route path="/" exact={true} component={Signin} />
            <Route path="/signup" exact={true} component={Session} /> 
            <Route path="/signin" exact={true} component={Session} /> 
            <Route path="/home" exact={true} component={Home} />
            <Route path="/newteam" exact={true} component={NewTeam} />
            <Route path="/:team" exact={true} component={TeamEntry}/>
        </Switch>
    </BrowserRouter>
);
