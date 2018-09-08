import React from 'react';
import { connect } from 'react-redux';

const Message = function(props) {
        return (
        <div className="Message">
            <div className="authorProp">{props.author}</div>
            <div className="textProp">{props.text}</div>
        </div>
        )
};

class List extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {

    }

    componentDidUpdate() {
        this.scrollToBottom()
    }


    render() {
        return (
            <div className="MessageContainer">
                {this.props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}
                <div className="messageScroll" ref={(el) => { this.messagesEnd = el; }}> </div>
            </div>
        );
    }
}

const mapSateToProps = (state) => {
  return {
      messages: state.messages,
  }
};

export default connect(mapSateToProps)(List);
