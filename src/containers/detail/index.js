import {connect} from 'react-redux';
import Detail from '../../components/detail'
import {filmDetail} from "../../actions/popularFilms-action";
import {addOrDelete} from '../../actions/favourite_films_action'

const mapDispatchToProps = (dispatch) => {
    return {
        filmDetail: (id) => dispatch(filmDetail(id)),
        addOrDelete: (filmId) => dispatch(addOrDelete(filmId)),
    }
};
const mapStateToProps = (state) => {
    return {
        filmInfo: state.filmDetail,
        favouriteFilms: state.favouriteFilms,
        filmDetailIsFetching: state.filmDetailIsFetching
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);