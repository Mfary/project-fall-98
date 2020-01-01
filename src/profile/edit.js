import React, {Component} from 'react'
import "./style.css"

class Edit extends Component {
    render() {
        return (
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#" title="Write a post"><i
                    className="fas fa-pencil-alt"></i></a>
                <a className="nav-item nav-link" href="/changepass" title="Change password"><i
                    className="fas fa-lock"></i></a>
                <a className="nav-item nav-link" href="#" title="Edit profile"><i className="fas fa-edit"></i>
                </a>
            </div>
        )
    }
}

export default Edit