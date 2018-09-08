import React from 'react';
import PropTypes from 'prop-types';
import './MessgeInputForm.css';
import { getMessages, saveMessage, onNewMessage } from '../storage';

import {connect} from 'react-redux';

// TODO: Add more functionality eg emoji, image attachment etc

class MessageInputForm extends React.Component {
    constructor() {
        super();

        this.state = {
            text: ''
        };

        this.updateMessage = this.updateMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };


    onSubmit() {
        this.props.onSend(this.state.text);
        saveMessage(
            {   text: this.state.text,
                author: this.props.author,
                channel_id: '',
                id: this.props.messages[this.props.messages.length - 1].id + 1,
            });
        this.setState({text: '' })
    };

    updateMessage(event) {
        this.setState(
            {
                 text: event.target.value
            }
        )
    };

    render() {
        return (
            <div className="MessageInputForm">
                <form className="form-group">
                    <label >Message Input</label>
                    <textarea
                        value={this.state.text}
                        onChange={this.updateMessage}
                        id="messageInput"
                        className="form-control"
                        cols="100"
                        rows="5"></textarea>
                </form>
                <button className="send btn btn-primary" onClick={this.onSubmit}>Send</button>
            </div>
        );
    }
}

MessageInputForm.defaultProps = {
    onSend: () => {}
};

MessageInputForm.propTypes = {
    onSend: PropTypes.func.isRequired
};



const mapStateToProps = (state) => {
    return {
        author: state.author,
        text: state.text,
        messages: state.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSend: (text) => {
            dispatch({
                type: "ON_SEND",
                payload: {text: text}
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputForm);
