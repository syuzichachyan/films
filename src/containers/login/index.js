import React from 'react';
import {connect} from 'react-redux';
import Login from '../../components/login';
import {login,isFetching} from '../../actions/login-action'
import {selectIsAuthenticated} from '../../selectors'
import {filmsWithPage} from "../../actions/popularFilms-action";

const mapStateToProps = (state) => {
    return {
        email: state.form.login?state.form.login.hasOwnProperty("values")?state.form.login.values.email:"":"",
        apiKey:state.form.login?state.form.login.hasOwnProperty("values")?state.form.login.values.apiKey:"":"",
        isAuthenticated: selectIsAuthenticated(state)}
};
const mapDispatchToProps = (dispatch) => {

    return {

        login:()=>dispatch(login()),

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
