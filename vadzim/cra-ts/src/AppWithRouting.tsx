import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import App from './App';
import Photos from './Photos';
import Tsx from './Tsx';

export default function AppWithRouting() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/photos">Photos (ohne LiftingStateUp!)</Link></li>
                        <li><Link to="/tsx">Tsx</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route
                        exact path="/"
                        component={App}
                    ></Route>
                    <Route
                        exact path="/photos"
                        component={Photos}
                    ></Route>
                    <Route
                        exact path="/tsx"
                        component={Tsx}
                    ></Route>
                </Switch>
            </div>

        </BrowserRouter>
    )
}