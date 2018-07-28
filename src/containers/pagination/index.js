import React,{Component} from 'react';
import {connect} from 'react-redux'
import Pagination from '../../components/pagination';
import {multiSearch} from "../../actions/multi-Search-action";
import {filmsWithPage, genres} from "../../actions/popularFilms-action";


const mapDispatchToProps = (dispatch) => {
    return {
        filmsWithPage:(page)=>dispatch(filmsWithPage(page)),

    }
};


export default connect(null,mapDispatchToProps)(Pagination);


