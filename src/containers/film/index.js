import React from 'react'
import Film from '../../components/film'
import {connect} from 'react-redux'
import {addOrDelete} from "../../actions/favourite_films_action";

const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        favouriteFilms:state.favouriteFilms

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addOrDelete:(filmId)=>dispatch(addOrDelete(filmId)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Film)