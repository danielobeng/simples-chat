import React, { Component } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import MessagePane from "./components/MessagePane";

import { getMessages, saveMessage, onNewMessage } from './storage';

// import msg from '../messages.json'
import Jumbotron from "./components/Jumbotron";

import { connect } from 'react-redux';


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
        // getMessages().then(messages => this.props.pullMessages(messages));
        getMessages().then(messages => this.setState({messages}));

        // setTimeout(() => console.log(this.state.messages),1000)
        setTimeout(() => this.props.pullMessages(this.state.messages), 1000)


        // console.log(getMessages())
        // const dbRef = database.ref().child('0')
        // const result = dbRef.on('value', (element) => element.val());
        // console.log(result)
        // this.setState({messages: dbRef});
        // console.log(dbRef.once('value').then(function(snapshot){return snapshot}))
        // console.log(this.state.messages)
        // return database.ref().child('0').once('value').then(function(snapshot) {
        //     const username = (snapshot.val() && snapshot.val().username) || 'not working';
        //     console.log(username)
    // });

        // onNewMessage(newMessage => {
        //     const messages = [...this.props.messages, newMessage];
        //     this.setState({ messages });
        //
        //     });

    }

    onSendMessage(author, text) {
        const newMessage = {
            id: this.state.messages[this.state.messages.length - 1].id + 1,
            author: this.props.author,
            text: text,
            channel_id: '',
        };

        saveMessage(newMessage);

        const messages = [...this.state.messages, newMessage];
        this.setState({ messages });
    };

   // changeUsername(author) {
   //     this.setState({author: author,
   //                    username: author})
   // }

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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
