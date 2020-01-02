import React, {Component} from 'react'

class ChangePassword extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-sm-6 col-lg-8">
                        <h3 className="card-title">Change password</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="oldPassword">Old password</label>
                                    <input type="password" className="form-control" id="oldPassword"
                                           placeholder="old pass" required/>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="newPassword">New password</label>
                                    <input type="password" className="form-control" id="newPassword"
                                           placeholder="new pass" required/>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="repeatPassword">Confirm password</label>
                                    <input type="password" className="form-control" id="repeatPassword"
                                           placeholder="repeat pass" required/>
                                </div>
                                <div className="button-container">
                                    <button type="submit" className="btn btn-primary">Change</button>
                                    <button type="reset" className="btn btn-primary">reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangePassword