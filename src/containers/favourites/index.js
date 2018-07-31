import {connect} from 'react-redux';
import Favourites from '../../components/favourites';
import {getMyFavourites} from '../../actions/favourite_films_action';
const mapDispatchToProps=(dispatch)=>{
    return{
        myFavourites:()=>dispatch(getMyFavourites())
    }
};
const mapStateToProps=(state)=>{
    return{
        favouriteFilms:state.getMyFavourites,
        myFavouritesIsFetching:state.myFavouritesIsFetching
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Favourites)