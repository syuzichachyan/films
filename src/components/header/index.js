import React, {Component} from 'react'
import {propertyToUrl} from "query-string-params";
import {
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    NavItem,
    NavLink
} from 'mdbreact';
import {withRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Header extends Component{
    constructor(props){
        super(props);
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== "")
        {    const params={
                key:e.target.value.trim(),
                page:1
            };
            this.props.multiSearchFunction(params.key, params.page);
            let queryString = this.props.location.pathname + '?' + propertyToUrl(params);
            this.props.history.push(queryString);
        }

    };
    render(){
        return(
                <Navbar color="blue" dark expand="md" scrolling>
                    <NavbarBrand href="/main">
                        <strong>Home</strong>
                    </NavbarBrand>
                        <NavbarNav left>
                            <NavItem >
                                <NavLink to="/">Favourites</NavLink>
                            </NavItem>
                        </NavbarNav>
                    <NavbarNav left>
                        <NavItem >
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onKeyDown={this.onKeyDown}  />
                        </NavItem>
                    </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle  color="blue">
                                    <i className="fa fa-user"> {this.props.email}</i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem ><span onClick={this.props.logout}>Logout</span></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                </Navbar>

        )
    }
}
export default withRouter(Header);