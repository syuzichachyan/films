import React, {Component} from 'react'
import Film from '../../containers/film';
import {withRouter} from 'react-router-dom'


class Films extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.genres();
        this.props.filmsWithPage(this.props.page);/*stugvi searchna te @ndhanur*/

    }
    render() {
        if(!this.props.popularFilmsIsFetching && this.props.genresIsFetching===false && !this.props.multiSearchIsFetching && !this.props.myFavouritesIsFetching) {
            const {favouriteFilms,films, search, multiSearch} = this.props;
            const isFavourite=this.props.location.pathname==="/favourites";
            const tempFilms = search ? multiSearch.results:isFavourite?favouriteFilms: films.results;
            return (<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
                    {tempFilms.map((item, index) => <Film film={item} key={item.id}  />)}
                </div>
            )
        }
        else
            return<div>Wait</div>
    }
}

export default withRouter(Films);