import {connect} from 'react-redux';
import Favourites from '../../components/favourites';
const mapStateToProps=(state)=>{
    return{
        myFavourites:state.getMyFavourites
    }
};

export default connect(mapStateToProps)(Favourites)