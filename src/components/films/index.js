import React, {Component} from 'react'
import Film from '../../containers/film';

class Films extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {films,isUrlContainSearch,multiSearch}=this.props;
        const tempFilms=isUrlContainSearch?multiSearch.results?films:multiSearch.results:films;
        return (<div style={{display:'flex',flexWrap: 'wrap',justifyContent: "center"}}>
            {tempFilms.map((item,index) => <Film film={item} key={index}/>)}
            </div>
        )
    }
}

export default Films;