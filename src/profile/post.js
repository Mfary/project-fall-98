import React, {Component} from 'react'
import "./style.css"

class Post extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h3 className="card-title"></h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Title"  required />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="textarea">New password</label>
                                <textarea className="form-control" id="textarea" placeholder="write"  required ></textarea>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="repeatPassword">Confirm password</label>
                                <input type="password" className="form-control" id="repeatPassword" placeholder="old"  required />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post