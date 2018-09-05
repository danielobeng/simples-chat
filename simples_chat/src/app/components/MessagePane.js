import React from "react";
import MessageInputForm from "./MessageInputForm.js";
import "./MessagePane.css";
import PropTypes from 'prop-types';

import List from './List';

import { connect } from 'react-redux';


// TODO: Display personal messages on the right and different colour than those sent by others

// const Message = function(props) {
//         return (
//         <div className="Message">
//             <div className="authorProp">{props.author}</div>
//             <div className="textProp">{props.text}</div>
//         </div>
//         )
//     // }
// };
//
// class List extends React.Component {
//
//     scrollToBottom = () => {
//         this.messagesEnd.scrollIntoView({ behavior: "smooth" });
//     };
//
//     componentDidMount() {
//         this.scrollToBottom()
//     }
//
//     componentDidUpdate() {
//         this.scrollToBottom()
//     }
//
//     render() {
//         return (
//             <div className="MessageContainer">
//                 {/*{this.props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}*/}
//                 <div className="messageScroll" ref={(el) => { this.messagesEnd = el; }}>
//                 </div>
//             </div>
//         );
//     }
// }

class MessagePane extends React.Component {
    render() {
        return (
            <div className="MessagePane">
                <List/>
                {/*<List messages={this.props.messages}/>*/}
                <MessageInputForm onSend={this.props.onSendMessage}/>
            </div>
        );
            }
}



MessagePane.defaultProps = {
    messages: []
};

MessagePane.propTypes = {
    messages: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        id: state.id,
        author: state.author,
    }
};

export default connect(mapStateToProps)(MessagePane);