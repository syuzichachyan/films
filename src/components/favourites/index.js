import React,{Component} from 'react'
import Header from '../../containers/header';
import Films from '../../containers/films'
class Favourites extends Component{
    constructor(props){
        super(props);

    }
    render(){

        return(<div><Header/>
        <Films films={this.props.myFavourites}/>
        </div>)
    }
}
export default Favourites;