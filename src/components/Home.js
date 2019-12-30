import React, {Component} from 'react'
import HomeCard from "./HomeCard";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <select className="custom-select mr-sm-2 mr-lg-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">Hottest</option>
                    <option value="2">Followed</option>
                    <option value="3">New</option>
                    <option value="4">Contributed</option>

                </select>
                <div className="cards-container">
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>


            </div>
        );
    }
}

export default Home
