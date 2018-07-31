import React, {Component} from 'react'
import Pegination from '../../containers/pagination';
import Header from '../../containers/header';
import './style.css'

import Films from '../../containers/films';

class Main extends Component{

    isFavourite=()=>{
      console.log( this.props.match.pathname);
      return this.props.match.pathname.contains("favourites"); }

    render(){
        return (


                (<div className="main">
            <Header/>
            <Films search={this.props.location.search} isFavourite={this.isFavourite}/>
             <Pegination search={this.props.location.search} />
            </div>
                ))


    }
}
export default Main;