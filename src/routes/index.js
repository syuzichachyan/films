import React, {Component} from 'react';
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import Login from '../containers/login';
import Main from '../components/main';
import PrivateRoute from '../containers/privateRouter';
import Detail  from '../containers/detail'
import Favourites  from '../containers/favourites'


class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute exact path="/main" component={Main}/>
                    <PrivateRoute exact path="/detail/:id" component={Detail}/>
                    <PrivateRoute exact path="/favourites" component={Favourites}/>
                </Switch>
            </Router>
        )
    }
}

export default Routers;