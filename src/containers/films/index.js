import Films from '../../components/films'
import {connect} from 'react-redux'
import {filmsWithPage, genres} from "../../actions/popularFilms-action";
const mapStateToProps = (state) => {
    return {
        films: state.popularFilms,
        multiSearch:state.multiSearch,
        multiSearchIsFetching:state.multiSearchIsFetching,
        popularFilmsIsFetching:state.popularFilmsIsFetching,
        genresIsFetching:state.genresIsFetching,
        myFavouritesIsFetching:state.multiSearchIsFetching,
        favouriteFilms:state.getMyFavourites
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        filmsWithPage:(page)=>dispatch(filmsWithPage(page)),
        genres:()=>dispatch(genres())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Films);