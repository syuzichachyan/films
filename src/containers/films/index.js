import React from 'react'
import Films from '../../components/films'
import {connect} from 'react-redux'
import {filmsWithPage, genres} from "../../actions/popularFilms-action";
import {multiSearch} from "../../actions/multi-Search-action";
import {multiSearchIsFetching} from "../../reducers/global-reducer";

const mapStateToProps = (state) => {
    return {
        films: state.popularFilms,
        multiSearch:state.multiSearch,
        multiSearchIsFetching:state.multiSearchIsFetching,
        popularFilmsIsFetching:state.popularFilmsIsFetching,
        genresIsFetching:state.genresIsFetching,
    }
};






export default connect(mapStateToProps)(Films);