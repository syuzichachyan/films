import React, {Component} from 'react'
import {propertyToUrl} from "query-string-params";
import {Navbar, NavbarBrand, NavbarNav, NavItem, NavLink} from 'mdbreact';
import {withRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style.css'

class Header extends Component {

    onKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== "") {
            const params = {
                key: e.target.value.trim()
            };
            this.props.multiSearchFunction(params.key, 1);
            let queryString = '/main?' + propertyToUrl(params);
            this.props.history.push(queryString);
            this.props.searchTextCreator(e.target.value.trim());

        }

    };
    homePage = () => {
        this.props.history.push('/main');
    };

    render() {
        return (
            <Navbar color="black" dark expand="md" scrolling>
                <NavbarBrand onClick={this.homePage} style={{color: "white"}}>
                    <strong>Home</strong>
                </NavbarBrand>
                <NavbarNav left>
                    <NavItem>
                        <NavLink to="/favourites">Favourites</NavLink>
                    </NavItem>
                    <NavItem>
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                               onKeyDown={this.onKeyDown}/>
                    </NavItem>
                </NavbarNav>
                <NavbarNav right>
                    <NavItem>
                        <i className="fa fa-user"> {this.props.email}</i>
                    </NavItem>
                    <NavItem>
                        <span className="logOut" onClick={this.props.logout}>Logout</span>
                    </NavItem>
                </NavbarNav>
            </Navbar>

        )
    }
}

export default withRouter(Header);