import React, {Component} from 'react';

class Pegination extends Component{
    constructor(props){
        super(props);
    }

    nextPage=()=> {

    this.props.filmsWithPage(+this.props.page + 1)
}
    prevPage=()=> {

        this.props.filmsWithPage(+this.props.page - 1)
    }

    render(){
        const {page}=this.props;
        return(
            <div style={{textAlign:"center"}}>
                {page>1?<span style={{
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