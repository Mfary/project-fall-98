import React, {Component} from 'react'
import "./sign.css"
class SignUp extends Component {
    render() {
        console.log("Hello")
        return (
            <div id="signUpContainer">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="card">
                            <div className="card-header">
                                <h3 style={{color : "black"}}>Sign Up</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="username" required/>

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password" required/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                        </div>
                                        <input type="tel" className="form-control" placeholder="phone number" required/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="email" className="form-control" placeholder="email@mail.com" required/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-flag"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="country" required/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-city"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="your city" required/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox"/><span style={{color : "black"}}>Remember Me</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn float-right login_btn"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links" style={{color : "black"}}>
                                    Have an account?<a href="/sign" style={{color : "blue"}}>Sign in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}
export default SignUp