import React from "react";
import MessageInputForm from "./MessageInputForm.js";
import "./MessagePane.css";
import PropTypes from 'prop-types';

// TODO: Display personal messages on the right and different colour than those sent by others

const Message = function(props) {
        return (
        <div className="Message">
            <div className="authorProp">{props.author}</div>
            <div className="textProp">{props.text}</div>
        </div>
        )
    // }
};

class List extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    render() {
        return (
            <div className="MessageContainer">
                {this.props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}
                <div className="messageScroll" ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}

const MessagePane = ({messages, onSendMessage}) => (
            <div className="MessagePane">
                <List messages={messages}/>
                <MessageInputForm onSend={onSendMessage}/>
            </div>
        );


MessagePane.defaultProps = {
    messages: []
};

MessagePane.propTypes = {
    messages: PropTypes.array.isRequired
};

export default MessagePane;