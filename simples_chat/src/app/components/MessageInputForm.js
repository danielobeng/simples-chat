import React from 'react';
import PropTypes from 'prop-types';
import './MessgeInputForm.css';
import { saveMessage } from '../storage';

import {connect} from 'react-redux';

import EmojiPicker from 'emoji-picker-react';
import JSEMOJI from 'emoji-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

        if (e.shiftKey && e.key === 'Enter') {

        }

        else if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('messageSendButton').click();
        }
    }

    handleEmojiClick = (code, data) => {
        const jsemoji = new JSEMOJI();
        // set the style to emojione (default - apple)
        jsemoji.img_set = 'emojione';
        // set the storage location for all emojis
        jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';


        let emojiRender = jsemoji.replace_colons(`:${data.name}:`);

        this.setState(
            {
                text: this.state.text + emojiRender
            }
        )

    };

    handleClickOpenEmojiButton = () => {
        let emojiPanel = document.getElementsByClassName('emoji-picker')[0];

        if (window.getComputedStyle(emojiPanel, null).getPropertyValue('display') === 'none') {
            emojiPanel.style.display = 'block';
            }
        else if (window.getComputedStyle(emojiPanel, null).getPropertyValue('display') === 'block') {
            // emojiPanel.style.display = 'none';
        }
    };


    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return
        }
        this.handleClickOutside();
    };

    handleClickOutside = () => {
        let emojiPanelDisplay = document.getElementsByClassName('emoji-picker')[0];
        emojiPanelDisplay.style.display = "none";
    };

    render() {
        return (
            <div className="MessageInputForm" >
                <div id="openEmojiButton" onClick={this.handleClickOpenEmojiButton}>
                   <FontAwesomeIcon id="grin-beam" icon="grin-beam" />
                </div>

                <div ref={node => this.node = node}>
                    <EmojiPicker onEmojiClick={this.handleEmojiClick} />
                </div>
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
