import {connect} from 'react-redux'
import Main from '../../components/main';
import {filmsWithPage, genres} from "../../actions/popularFilms-action";

const mapStateToProps = (state) => {
    return {

        popularFilmsIsFetching: state.popularFilmsIsFetching,
        genresIsFetching: state.genresIsFetching,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        filmsWithPage: (page) => dispatch(filmsWithPage(page)),
        genres: () => dispatch(genres()),


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);