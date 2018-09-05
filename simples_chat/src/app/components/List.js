import React from 'react';
import { connect } from 'react-redux';
import { getMessages, saveMessage, onNewMessage } from '../storage';

const Message = function(props) {
        return (
        <div className="Message">
            <div className="authorProp">{props.author}</div>
            <div className="textProp">{props.text}</div>
        </div>
        )
};

class List extends React.Component {

    // scrollToBottom = () => {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    // };

    componentDidMount() {
        let msg;
        console.log(this.props.messages)
        getMessages().then(messages => {msg = messages})
        console.log(msg)
       // console.log(this.props.messages.then(messages.map(({id, author, text}) => `elements ${id}, ${author}, ${text}`)))
       //  getMessages().then(function(messages) {console.log(messages)})
        // console.log(this.props.messages)
    //     this.scrollToBottom()
    }

    // componentDidUpdate() {
    //     this.scrollToBottom()
    // }

    render() {
        return (
            <div className="MessageContainer">

            </div>
        );
    }
}

//{this.props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}
//<div className="messageScroll" ref={(el) => { this.messagesEnd = el; }}> </div>
const mapSateToProps = (state) => {
  return {
      messages: state.messages,
  }
};

export default connect(mapSateToProps)(List);
