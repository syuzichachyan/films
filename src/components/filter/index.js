import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class Filter extends Component{
    constructor(props){
        super(props);
    }
    onKeyDown =(e)=> {
        if (e.keyCode === 13 && e.target.value.trim() !== "")
        {
            this.props.history.push(`/search/${encodeURIComponent(e.target.value.trim())}/1`);
        }

    };
    render(){
        return(
            <div>
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" onKeyDown={this.onKeyDown}  />
            </div>
        )

    }
}
export default withRouter(Filter);