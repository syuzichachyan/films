import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Film from '../../containers/film';


class Films extends Component {
    componentDidMount() {
        this.props.genres();
        if (this.props.location.pathname.indexOf("main") !== -1)
            this.props.filmsWithPage(this.props.page);

    }

    render() {
        if (this.props.popularFilmsIsFetching === false && this.props.genresIsFetching === false && !this.props.multiSearchIsFetching && !this.props.myFavouritesIsFetching) {
            const {favouriteFilms, films, search, multiSearch} = this.props;
            const isFavourite = this.props.location.pathname === "/favourites";
            const tempFilms = search ? multiSearch.results : isFavourite ? favouriteFilms : films.results;
            return (<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
                    {tempFilms ? tempFilms.map((item, index) => <Film film={item} key={item.id}/>) :
                        <div>There are not films</div>}
                </div>
            )
        }
        else
            return <div>Wait</div>
    }
}

export default withRouter(Films);