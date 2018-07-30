import React, {Component} from 'react'
import Pegination from '../../containers/pagination';
import Header from '../../containers/header';

import Films from '../../containers/films';

class Main extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.genres();
        this.props.filmsWithPage(this.props.page);/*stugvi searchna te @ndhanur*/

    }

    render(){
        return (
            (this.props.popularFilmsIsFetching===false && this.props.genresIsFetching===false)?
                (<div>
            <Header/>
            <Films search={this.props.location.search}/>
             <Pegination page={this.props.page}/>
            </div>
                ) : (<div>Wait</div>))


    }
}
export default Main;