import React  from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header'
import {logout} from "../../actions/logout-action";
const mapStateToProps=(state)=>{
    return {
        email: state.currentUser.email
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout:()=>dispatch(logout())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);