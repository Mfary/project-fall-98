import React, {Component} from 'react'
import "./style.css"

class Follow extends Component {
    render() {
        let button;
        if(this.props.folloew)
            button = <a href="#" class="nav-item nav-link activer" title="unfollow"><i className="fas fa-user-plus"></i> </a>;
        else
            button = <a href="#" class="nav-item nav-link active" title="Follow"><i className="fas fa-user-alt-slash"></i> </a>;
        return (
            <div className="navbar-nav">
                { button }
            </div>
        )
    }
}
export default Follow