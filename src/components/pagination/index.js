import React, {Component} from 'react';
import './style.css'


class Pegination extends Component {
    nextPage = () => {
        if (this.props.search)
            this.props.multiSearchFunction(this.props.searchText, +this.props.searchPage + 1);
        else
            this.props.filmsWithPage(+this.props.page + 1)
    };
    prevPage = () => {

        if (this.props.search)
            this.props.multiSearchFunction(this.props.searchText, +this.props.searchPage - 1);
        else
            this.props.filmsWithPage(+this.props.page - 1)
    };

    render() {
        const {page, searchPage} = this.props;
        return (
            <div className="centerPosition">
                {(page > 1 || (this.props.search && searchPage > 1)) ? <span className="pagination">
                    <a onClick={this.prevPage}
                    >Previous</a>
                </span> : null
                }
                <span className="pagination">
                    <a onClick={this.nextPage}
                    >Next</a></span>
            </div>
        )
    }
}

export default Pegination;