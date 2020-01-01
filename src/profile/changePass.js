import React, {Component} from 'react'
import "./style.css"

class ChangePassword extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h3 className="card-title">Change password</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="oldPassword">Old password</label>
                                <input type="password" className="form-control" id="oldPassword" placeholder="old"  required />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="newPassword">New password</label>
                                <input type="password" className="form-control" id="newPassword" placeholder="old"  required />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="repeatPassword">Confirm password</label>
                                <input type="password" className="form-control" id="repeatPassword" placeholder="old"  required />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Change</button>
                                <button type="reset" className="btn btn-primary">reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChangePassword