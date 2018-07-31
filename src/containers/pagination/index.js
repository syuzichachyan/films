import {connect} from 'react-redux'
import Pagination from '../../components/pagination';
import {multiSearch} from "../../actions/multi-Search-action";
import {filmsWithPage} from "../../actions/popularFilms-action";


const mapDispatchToProps = (dispatch) => {
    return {
        filmsWithPage:(page)=>dispatch(filmsWithPage(page)),
        multiSearchFunction: (key,page) => dispatch(multiSearch(key,page))

    }
};
const mapStateToProps=(state)=>{
    return {
        page:state.popularFilms?state.popularFilms.page:1,
        searchPage:state.multiSearch?state.multiSearch.page:1,
        searchText:state.searchText

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Pagination);


