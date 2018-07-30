import React,{Component} from 'react';
import {connect} from 'react-redux'
import Main from '../../components/main';
import {filmsWithPage, genres} from "../../actions/popularFilms-action";
import {multiSearch} from "../../actions/multi-Search-action";
import {genresIsFetching} from "../../reducers/global-reducer";

const mapDispatchToProps = (dispatch) => {
    return {
        filmsWithPage:(page)=>dispatch(filmsWithPage(page)),
        genres:()=>dispatch(genres())

    }
};
const mapStateToProps=(state)=>{
    return {
        popularFilmsIsFetching:state.popularFilmsIsFetching,
        genresIsFetching:state.genresIsFetching,
        page:state.popularFilms?state.popularFilms.page:1

    }
};



export default connect(mapStateToProps,mapDispatchToProps)(Main);