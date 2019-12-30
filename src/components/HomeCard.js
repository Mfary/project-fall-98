import React, {Component} from 'react'
import logo from "../static/img/1.jpg"

class HomeCard extends Component {
    render() {
        return (
            <div className="card home-card" style={{width: '18rem', margin: "10px"}}>
                <img src={logo} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                    <div className="row">
                        <a href="#" className="btn btn-primary col">Fallow</a>
                        <div className="col">
                            <ion-icon name="chatboxes"></ion-icon>

                        </div>
                        <div className="col">
                            <ion-icon name="thumbs-up"></ion-icon>
                            <span>19002</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeCard