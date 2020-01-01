import React, {Component} from 'react'
import "./style.css"

class Edit extends Component {
    render() {
        return (
            <div className="button-container col-9">
                <div>
                    <a href="#" class="btn btn-primary">Edit profile</a>
                </div>
                <div>
                    <a href="#" class="btn btn-primary">Change password</a>
                </div>
                <div>
                    <a href="#" class="btn btn-primary">Post</a>
                </div>
            </div>
        )
    }
}

export default Edit