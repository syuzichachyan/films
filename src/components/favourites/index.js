import React, {Component} from 'react'
import Header from '../../containers/header';
import Films from '../../containers/films'
import './style.css'

class Favourites extends Component {
    componentDidMount(){
        this.props.getMyFavourites();

    }
    render() {
        return (
            (<div className="favourite">
                <Header/>
                {!this.props.myFavouritesIsFetching ?
                    (<Films favouriteFilms={this.props.favouriteFilms}/>) :
                    <div className="zeroFavourites">There are not favourites films</div>}
            </div>))
    }
}


export default Favourites;