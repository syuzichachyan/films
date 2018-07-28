import React from 'react';
import {connect} from 'react-redux';
import Filter from '../../components/filter';
import {multiSearch} from '../../actions/multi-Search-action'

const mapDispatchToProps = (dispatch, getState) => {
    return {
        multiSearch: (key,page) => dispatch(multiSearch(key,page))
    }

};

export default connect(null, mapDispatchToProps)(Filter);