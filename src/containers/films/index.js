import React from 'react'
import Films from '../../components/films'
import {connect} from 'react-redux'
import {filmsWithPage} from "../../actions/popularFilms-action";

const mapStateToProps = (state) => {
    return {
        films: state.popularFilms.results,
        multiSearch:state.multiSearch
    }
};


export default connect(mapStateToProps)(Films);