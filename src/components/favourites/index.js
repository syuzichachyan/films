import React, {Component} from 'react'
import Header from '../../containers/header';
import Films from '../../containers/films'

class Favourites extends Component {
    render() {
        return (
                (<div>
                    <Header/>
                    {!this.props.myFavouritesIsFetching ?
                        (<Films favouriteFilms={this.props.favouriteFilms}/>) :
                        <div>There are not favourites films</div>}
                </div>))
    }
}

export default Favourites;