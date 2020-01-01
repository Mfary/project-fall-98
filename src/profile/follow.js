import React, {Component} from 'react'
import "./style.css"

class Follow extends Component {
    render() {
        let button;
        if(this.props.folloew)
            button = <a href="#" class="btn btn-danger">unfollow</a>;
        else
            button = <a href="#" class="btn btn-success">follow</a>;
        return (
            <div className="container">
                { button }
            </div>
        )
    }
}
export default Follow