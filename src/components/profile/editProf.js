import React, {Component} from 'react'
import "./style.css"

class EditProf extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-sm-6 col-lg-8">
                        <h3 className="card-title">Edit profile</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name"
                                           placeholder="old pass"/>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="tel" className="form-control" id="phoneNumber"
                                           placeholder="phone number"/>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="mail@mail.com"/>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" className="form-control" id="country"
                                           placeholder="country"/>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="city">Confirm password</label>
                                    <input type="text" className="form-control" id="city"
                                           placeholder="city"/>
                                </div>
                                <div className="center">
                                    <button type="submit" className="btn btn-primary col-6">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProf