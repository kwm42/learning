import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return (
            <Router>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/battle/">Battle</NavLink>
                    </li>
                </ul>
            </Router> 
        )
    }
}

export default Nav;