import React, {Component} from 'react'
import Header from '../../containers/header';
import Films from '../../containers/films'

class Favourites extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.myFavourites();

    }

    render() {

        return (
            !this.props.myFavouritesIsFetching ?

                (<div><Header/>
                    <Films favouriteFilms={this.props.favouriteFilms}/>
                </div>) : (<div>Wait</div>))
    }
}

export default Favourites;