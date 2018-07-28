import React,{Component} from 'react';
import {connect} from 'react-redux'
import Main from '../../components/main';
import {filmsWithPage, genres} from "../../actions/popularFilms-action";
import {multiSearch} from "../../actions/multi-Search-action";
const mapStateToProps=(state)=>{
    return {
        page:state.popularFilms.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        genres:()=>dispatch(genres()),
        filmsWithPage:(page)=>dispatch(filmsWithPage(page)),
        multiSearch: (key,page) => dispatch(multiSearch(key,page))

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Main);