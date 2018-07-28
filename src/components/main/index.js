import React,{Component} from 'react'
import  Pegination  from '../../containers/pagination';
import Header from '../../containers/header';
import Filter from '../../containers/filter'

import Films from '../../containers/films';

class Main extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.genres();
        this.props.filmsWithPage(this.props.page);/*stugvi searchna te @ndhanur*/
        this.props.multiSearch(this.props.match.params.key,this.props.match.params.page);
    }

    render(){
        const isUrlContainSearch=this.props.match.url.includes("search");
        return (
            <div>
            <Header/>
            <Filter />
            <Films  isUrlContainSearch={isUrlContainSearch} />
             <Pegination page={this.props.page}/>
            </div>
        )


    }
}
export default Main;