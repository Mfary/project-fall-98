import React, {Component} from 'react'
import './style.css'

class TextArea extends Component {

    state = {
        isVisible: true,
        isTopicNameVisible: true,
        isForChannel: true,
    };

    componentDidMount() {
        const {isVisible, isTopicNameVisible, isForChannel} = this.props;
        if (isVisible == "true") {
            this.setState({
                isVisible: true
            })
        } else {
            this.setState({
                isVisible: false
            })
        }
        if (isTopicNameVisible == "true") {
            this.setState({
                isTopicNameVisible: true
            })
        } else {
            this.setState({
                isTopicNameVisible: false
            })
        }
        if (isForChannel == "true") {
            this.setState({
                isForChannel: true
            })
        } else {
            this.setState({
                isForChannel: false
            })
        }

    }

    render() {
        console.log("ENTER")
        let whole_display = "block";
        if (!this.state.isVisible) {
            whole_display = "none";
        }
        let topic_display = "block";
        if (!this.state.isTopicNameVisible) {
            topic_display = "none";
        }
        let MakeNew = "Make New Comment";
        if (this.state.isForChannel) {
            MakeNew = "Make New Channel"
        }
        return (
            <div className={"container"}>
                <button className="btn btn-primary" type="button" data-toggle="collapse"
                        data-target="#collapseInputForm"
                        aria-expanded="false" aria-controls="collapseExample">
                    {MakeNew}
                </button>
                <div className={"collapse"} id={"collapseInputForm"}>
                    <form>
                        <div style={{display: {topic_display}}}>
                            <div className="md-form">
                                <label htmlFor="form1">Title</label>
                                <input type="text" id="form1" className="form-control"/>

                            </div>
                        </div>
                        <div style={{display: {whole_display}}}>
                            <div className="form-group shadow-textarea">
                                <label htmlFor="exampleFormControlTextarea6">Content</label>
                                <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3"
                                          placeholder="Write something here to make a new channel"></textarea>
                            </div>

                        </div>
                        <button type="button" className="btn btn-labeled btn-success">
                            <span className="btn-label"><span className="glyphicon glyphicon-ok"></span></span>Post
                        </button>
                    </form>
                </div>
            </div>
        )
    }

}

export default TextArea