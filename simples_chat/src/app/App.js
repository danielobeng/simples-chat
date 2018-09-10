import React, { Component } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import MessagePane from "./components/MessagePane";

import { getMessages, saveMessage, onNewMessage } from './storage';

import Jumbotron from "./components/Jumbotron";

import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGrinBeam } from '@fortawesome/free-solid-svg-icons'

library.add(faGrinBeam)


// TODO:
// make messages load without the need for a timer using promises properly
// fix the need to have messages pre-loaded
// only one username per session
// implement event sourcing
//skeleton page pre loaded
// spinner for loading
// design and add a special hug emoji to the chat app
// loader for message send

// BUGS:
// clicking on emoji button should also close the emoji pane

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

        if (this.state.messages) {
            this.props.pullMessages(this.state.messages, true)
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
        messages: state.messages,
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
        pullMessages: (messages, initialDataLoaded) => {
            dispatch({
                type: "PULL_MESSAGES",
                payload: {
                    messages,
                    initialDataLoaded,
                }
            })
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
