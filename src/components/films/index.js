import React, {Component} from 'react'
import {propertyToUrl, urlToProperty, urlToList}
    from "query-string-params";
import Film from '../../containers/film';

class Films extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {films,search,multiSearch}=this.props;
        const tempFilms=search?multiSearch.results:films;
        return (<div style={{display:'flex',flexWrap: 'wrap',justifyContent: "center"}}>
            {tempFilms.map((item,index) => <Film film={item} key={index}/>)}
            </div>
        )
    }
}

export default Films;