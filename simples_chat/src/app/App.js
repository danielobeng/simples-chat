import React, { Component } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import MessagePane from "./components/MessagePane";

import { getMessages, saveMessage, onNewMessage } from './storage';

import Jumbotron from "./components/Jumbotron";

import { connect } from 'react-redux';

// TODO:
// - No send message if text is empty
// - No send message if name is not set
// If author name is same as user name then put text to the right

class App extends Component {
    constructor() {
     super();
     this.state = {
         author: '',
         username: '',
     };
     this.onSendMessage = this.onSendMessage.bind(this);
     // this.changeUsername = this.changeUsername.bind(this);

    };

    componentDidMount() {

        getMessages().then(messages => this.setState({messages}));
        setTimeout(() => this.props.pullMessages(this.state.messages), 2000)

        onNewMessage(newMessage => {
            const messages = [...this.props.messages, newMessage];
            this.setState({ messages });
            this.props.pullMessages(messages)
            });
    }

    onSendMessage(text) {
        console.log(this.props.messages[this.props.messages.length - 1].id + 1)
        const newMessage = {
            id: this.props.messages[this.props.messages.length - 1].id + 1,
            author: this.props.author,
            text: text,
            channel_id: '',
        };

        saveMessage(newMessage);

        const messages = [...this.state.messages, newMessage];
        this.setState({ messages });
    };

  render() {
    return (
      <div className="App">
          <Jumbotron/>
         <LoginForm onSubmit={this.props.changeUsername}/>
          <MessagePane username={this.props.username} messages={this.props.messages} onSendMessage={this.onSendMessage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        author: state.author,
        username: state.username,
        messages: state.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUsername: (author) => {
            dispatch({
                type: "CHANGE_USERNAME",
                payload: {author}
            })
        },
        pullMessages: (messages) => {
            dispatch({
                type: "PULL_MESSAGES",
                payload: {messages}
            })
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
