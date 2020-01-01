import React, {Component} from 'react'
import "./style.css"

class Follow extends Component {
    render() {
        let button;
        if(this.props.folloew)
            button = <a href="#" class="btn btn-primary">unfollow</a>;
        else
            button = <a href="#" class="btn btn-primary">follow</a>;
        return (
            <div className="container">
                { button }
            </div>
        )
    }
}
export default Follow