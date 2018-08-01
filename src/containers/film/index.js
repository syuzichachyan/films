import Film from '../../components/film'
import {connect} from 'react-redux'
import {addOrDelete, getMyFavourites} from "../../actions/favourite_films_action";

const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        favouriteFilms: state.favouriteFilms,
        myFavouritesIsFetching: state.myFavouritesIsFetching
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addOrDelete: (filmId) => dispatch(addOrDelete(filmId)),
        getMyFavourites: () => dispatch(getMyFavourites())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Film)