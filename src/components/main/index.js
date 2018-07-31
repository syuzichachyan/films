import React, {Component} from 'react'
import Pegination from '../../containers/pagination';
import Header from '../../containers/header';

import Films from '../../containers/films';

class Main extends Component{
    constructor(props){
        super(props);
    }

    isFavourite=()=>{
      console.log( this.props.match.pathname);
      return this.props.match.pathname.contains("favourites");    }

    render(){
        return (


                (<div style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)'}}>
            <Header/>
            <Films search={this.props.location.search} isFavourite={this.isFavourite}/>
             <Pegination search={this.props.location.search} />
            </div>
                ))


    }
}
export default Main;