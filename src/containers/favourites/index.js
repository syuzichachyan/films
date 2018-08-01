import {connect} from 'react-redux';
import Favourites from '../../components/favourites';
import {addOrDelete, getMyFavourites} from "../../actions/favourite_films_action";

const mapStateToProps = (state) => {
    return {
        favouriteFilms: state.getMyFavourites,
        myFavouritesIsFetching: state.myFavouritesIsFetching
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getMyFavourites: () => dispatch(getMyFavourites())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Favourites)