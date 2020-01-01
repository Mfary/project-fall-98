import React, {Component} from 'react'
import "./style.css"

class Edit extends Component {
    render() {
        return (
            <div className="container">
                <a href="#" class="btn btn-primary">Edit profile</a>
                <a href="#" class="btn btn-primary">Change password</a>
                <a href="#" class="btn btn-primary">Post</a>
            </div>
        )
    }
}
export default Edit