import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Nav from '../nav'
import About from '../../pages/about/About'
import Popular from '../../pages/popular/Popular'
import Battle from '../../pages/battle/Battle'
import Users from '../../pages/users/Users'
import Profile from '../../pages/profile/Profile'

import './index.css'

class Container extends React.Component{
    render(){
        return (
            <Router>
              <div>
                <ul className="link-wrapper">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/battle/">Battle</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users/">Users</NavLink>
                    </li>
                </ul>
                <Nav />
                <Switch>
                    <Route path="/" exact component={ Popular } />
                    <Route path="/about/" component={ About } />
                    <Route path="/battle/" component={ Battle } />
                    <Route path="/users/" component={ Users } />
                    <Route path="/profile/:id" component={ Profile } />
                </Switch>
              </div>
            </Router>
          );
    }
}

export default Container;