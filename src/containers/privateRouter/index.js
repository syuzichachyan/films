import React from 'react';
import PrivateRoute from '../../routes/privateRoutes';
import {connect} from 'react-redux';
import {selectIsAuthenticated} from "../../selectors";

const mapStateToProps = (state) => {
    return {
        currentUser:state.currentUser,
        isAuthenticated: selectIsAuthenticated(state)

}
};


export default connect(mapStateToProps)(PrivateRoute);