import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import StarRatingComponent from 'react-star-rating-component';

class Film extends Component {
    isFavourite(id) {
        return this.props.favouriteFilms.indexOf(id) !== -1;
    };

    render() {
        const {film,genres} = this.props;
        const flag = this.isFavourite(film.id);
        return (

            <div className="col-md-2" style={{margin: "10px"}}>
                <div className="card" >
                    <img
                        src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                        alt="Card image cap"/>
                    <div style={{padding:"10px"}} >
                        <h5 className="card-title">{film.title} <i className="fa fa-heart" aria-hidden="true"
                                                                   title={`${flag ? "Delete film from Foavourite films list" : "Add film to Favourite films list"}`}
                                                                   style={{color: `${flag ? "orange" : "black"}`}}
                                                                   onClick={ () => {this.props.addOrDelete(film.id);this.props.getMyFavourites(this.props.favouriteFilms)}}> </i></h5>
                         {film.genre_ids.map((id) => (
                            <span className="card-title" key={id}>
                               {genres.find(el=>{return el.id===id})?genres.find(el=>{return el.id===id}).name +" ":" "}
                            </span>
                        ))}
                        <h6 className="card-text">{film.release_date}
                        </h6>
                        <StarRatingComponent name="name"
                                             starCount={10}
                                             value={film.vote_average}/>
                        <p>
                            <Link className="btn btn-primary waves-effect waves-light" to={`/detail/${film.id}`}>Detail</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Film;