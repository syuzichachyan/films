import React, {Component} from 'react'
import {propertyToUrl, urlToProperty, urlToList}
    from "query-string-params";
import Film from '../../containers/film';
import {multiSearchIsFetching} from "../../reducers/global-reducer";

class Films extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.popularFilmsIsFetching===false && this.props.genresIsFetching===false && !this.props.multiSearchIsFetching) {
            const {films, search, multiSearch} = this.props;
            const tempFilms = search ? multiSearch.results : films.results;
            return (<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
                    {tempFilms.map((item, index) => <Film film={item} key={index}/>)}
                </div>
            )
        }
        else
            return<div>Wait</div>
    }
}

export default Films;