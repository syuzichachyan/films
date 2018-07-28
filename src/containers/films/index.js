import React from 'react'
import Films from '../../components/films'
import {connect} from 'react-redux'
import {filmsWithPage, genres} from "../../actions/popularFilms-action";
import {multiSearch} from "../../actions/multi-Search-action";

const mapStateToProps = (state) => {
    return {
        films: state.popularFilms.results,
        multiSearch:state.multiSearch
    }
};






export default connect(mapStateToProps)(Films);