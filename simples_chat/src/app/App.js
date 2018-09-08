import React, { Component } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import MessagePane from "./components/MessagePane";

import { getMessages, saveMessage, onNewMessage } from './storage';

import Jumbotron from "./components/Jumbotron";

import { connect } from 'react-redux';

// TODO:
// make messages load without the need for a timer using promises properly
// only one username per session
// map enter to submit name for logiin
// map enter to denter message on input and shift + enter to enter a new line
// emoji selesctions
// fix the need to have messages pre-loaded
// implement event sourcing

// BUG:
// send on enter does not scoll page down

class App extends Component {
    constructor() {
     super();
     this.state = {
         author: '',
         username: '',
     };
     this.onSendMessage = this.onSendMessage.bind(this);

    };
    componentWillMount() {

    }

    componentDidMount() {

        getMessages().then(messages => this.setState({messages}));
        setTimeout(() => this.props.pullMessages(this.state.messages), 2000)

        onNewMessage(newMessage => {
            const messages = [...this.props.messages, newMessage];
            this.setState({ messages });
            this.props.pullMessages(messages)
            });

    }

    componentDidUpdate() {
        let authorProp = document.getElementsByClassName('authorProp')
        let Message = document.getElementsByClassName('Message')
        for (let i = 0; i < authorProp.length; i++) {
            if (authorProp[i].textContent === this.props.username) {
                Message[i].classList.add('self');
            }
            else {
                Message[i].classList.remove('self')
            }
        }
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
