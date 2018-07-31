import React, {Component} from 'react';


class Pegination extends Component{
    nextPage=()=> {
        if (this.props.search)
            this.props.multiSearchFunction(this.props.searchText, +this.props.searchPage + 1);
        else
            this.props.filmsWithPage(+this.props.page + 1)
    };
    prevPage=()=> {

        if (this.props.search)
            this.props.multiSearchFunction(this.props.searchText, +this.props.searchPage - 1);
        else
            this.props.filmsWithPage(+this.props.page - 1)
    };

    render(){
        const {page,searchPage}=this.props;
        return(
            <div style={{textAlign:"center"}}>
                {(page>1 ||(this.props.search &&  searchPage>1))?<span style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "15px",
                    margin: "5px"
                }} >
                    <a onClick={this.prevPage}
                      >Previous</a>
                </span>:null
                }
                <span style={{display: "inline-block",
                    padding: "5px 14px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "15px",
                    margin:"5px"}}>
                    <a onClick={this.nextPage}
                    >Next</a></span>
            </div>
        )
    }
}
export default Pegination;