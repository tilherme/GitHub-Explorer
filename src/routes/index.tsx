import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

import Dashoard from '../pages/Dashoard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashoard} />
            <Route  path="/repository/:repository+" component={Repository} />
        </Switch>
    </BrowserRouter>;
}
export default Routes;