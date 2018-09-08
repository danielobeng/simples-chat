import React from 'react';
import PropTypes from 'prop-types';
import './MessgeInputForm.css';
import { saveMessage } from '../storage';

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
        if (this.state.text === '' || this.props.author === '') {}

        else {
            this.props.onSend(this.state.text, false);
        saveMessage(
            {
                text: this.state.text,
                author: this.props.author,
                channel_id: '',
                id: this.props.messages[this.props.messages.length - 1].id + 1,
            });
        this.setState({text: ''})
        }
    };

    updateMessage(event) {
        this.setState(
            {
                 text: event.target.value
            }
        )
    };

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            document.getElementById('messageSendButton').click();
        }
    }

    render() {
        return (
            <div className="MessageInputForm">
                <form className="form-group">
                    <label >Message Input</label>
                    <textarea
                        value={this.state.text}
                        onChange={this.updateMessage}
                        onKeyPress={this.handleKeyPress}
                        id="messageInput"
                        className="form-control"
                        cols="100"
                        rows="5"></textarea>
                </form>
                <button id='messageSendButton' className="send btn btn-primary" onClick={this.onSubmit}>Send</button>
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
        onSend: (text, pageLoad) => {
            dispatch({
                type: "ON_SEND",
                payload: {
                    text: text,
                    pageLoad: pageLoad
                }
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputForm);
