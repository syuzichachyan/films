import {connect} from 'react-redux';
import Favourites from '../../components/favourites';

const mapStateToProps=(state)=>{
    return{
        favouriteFilms:state.getMyFavourites,
        myFavouritesIsFetching:state.myFavouritesIsFetching
    }
};

export default connect(mapStateToProps)(Favourites)