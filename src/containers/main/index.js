import React,{Component} from 'react';
import {connect} from 'react-redux'
import Main from '../../components/main';
import {filmsWithPage, genres} from "../../actions/popularFilms-action";
import {multiSearch} from "../../actions/multi-Search-action";
import {genresIsFetching} from "../../reducers/global-reducer";

const mapDispatchToProps = (dispatch) => {
    return {


    }
};

export default connect(null,mapDispatchToProps)(Main);