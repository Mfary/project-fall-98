import React, {Component} from 'react'
import "./sign.css"
class Sign extends Component {
    render() {
        console.log("Hello")
        return (
            <div id="signUpContainer">
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3 style={{color : "black"}}>Sign In</h3>
                            </div>
                            <div className="card-body">
                                <form action="127.0.0.1:8000/api/account/signup" method="post">
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="username"/>

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox" /><span style={{color : "black"}}>Remember Me</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn float-right login_btn"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links" style={{color : "black"}}>
                                    Don't have an account?<a href="/signUp " style={{color : "blue"}}>Sign Up</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#" style={{color : "blue"}}>Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

}
export default Sign