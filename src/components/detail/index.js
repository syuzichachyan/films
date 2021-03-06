import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Header from '../../containers/header'
import './style.css'


class Detail extends Component {

    isFavourite(id) {
        return this.props.favouriteFilms.indexOf(id) !== -1;
    };

    componentDidMount() {
        this.props.filmDetail(this.props.match.params.id);
    }

    render() {
        const {filmInfo, filmDetailIsFetching} = this.props;
        return (
            (filmDetailIsFetching === false) ? (

                <div>
                    <Header/>
                    <div className="film">
                        <div className="card col-md-2">
                            <img className="card-img-top"
                                 src={`https://image.tmdb.org/t/p/w200${filmInfo.poster_path}`}
                                 alt="Card image cap"/>
                        </div>
                        <div className="card col-md-10">
                            <div className="card-body">
                                <h4 className="card-title">{filmInfo.title} <i className="fa fa-heart"
                                                                               aria-hidden="true"
                                                                               title={`${this.isFavourite(filmInfo.id) ? "Delete film from Favourite films list" : "Add film to Favourite films list"}`}
                                                                               style={{color: `${this.isFavourite(filmInfo.id) ? "orange" : "black"}`}}
                                                                               onClick={() => this.props.addOrDelete(filmInfo.id)}> </i>
                                </h4>

                                <p className="card-text">{filmInfo.overview}</p>

                                <p className="card-text">{filmInfo.release_date}
                                </p>
                                <StarRatingComponent name="name"
                                                     starCount={10}
                                                     value={filmInfo.vote_average}
                                />
                                <p><i className="fa fa-eye">{filmInfo.popularity}</i></p>
                                <h5>Production companies</h5>
                                <div className="film" style={{display: "flex", flexWrap: 'wrap'}}>
                                    {filmInfo.production_companies.map(el => <div key={el.id}>
                                        <span>  {el.name}</span>
                                        {el.logo_path ? (<img className="card-img-top logo"
                                                              src={`https://image.tmdb.org/t/p/w200${el.logo_path}`}
                                                              alt="Card image cap"/>) : null}
                                    </div>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<div>Wait</div>))
    }
}

export default Detail;