import React, {Component} from 'react';
import channels from '../../static/jsons/Channels'

class ChannelPage extends Component{

    state = {
        channels : []
    }

    componentDidMount() {
        this.setState({
            channels : channels,
        })
    }

    render() {
        return(
            <div className="container">
                <h3 >Channels</h3>
                <hr />
                {/*TODO Channels*/}
                <button className="btn btn-primary " style={{marginBottom : "10px"}} type="button" data-toggle="collapse"
                        data-target="#collapseInputForm"
                        aria-expanded="false" aria-controls="collapseExample">
                    Make New Channel
                </button>
                <div className={"collapse"} id={"collapseInputForm"}>
                    <form >
                        <div>
                            <div className="md-form">
                                <label htmlFor="form1">Name</label>
                                <input type="text" id="form1" className="form-control"
                                       />
                            </div>
                            <div className="md-form">
                                <label htmlFor="form1">Title</label>
                                <input type="text" id="form1" className="form-control"
                                />
                            </div>
                            <div className="md-form">
                                <label htmlFor="form1">Rules</label>
                                <input type="text" id="form1" className="form-control"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group shadow-textarea">
                                <label htmlFor="exampleFormControlTextarea6">Content</label>
                                <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3"
                                          placeholder="Write something here to make a new channel"
                                          value={this.state.content}
                                          ></textarea>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-labeled btn-success">
                            <span><i className=""></i></span>Make
                        </button>
                    </form>
                </div>

            </div>
        )
    }

}
export default ChannelPage