import React  from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header'
import {logout} from "../../actions/logout-action";
import {multiSearch} from "../../actions/multi-Search-action";
const mapStateToProps=(state)=>{
    return {
        email: state.currentUser.email
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout:()=>dispatch(logout()),
        multiSearchFunction: (key,page) => dispatch(multiSearch(key,page))

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Header);