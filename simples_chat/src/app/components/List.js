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
        if (this.props.pageLoad === true) {
            const objDiv = document.getElementById('MessageContainer');
            objDiv.scrollTop = objDiv.scrollHeight;
            console.log('pageload ' + this.props.pageLoad);
        }
        else if (this.props.pageLoad === false) {
            this.scrollToBottom();
            console.log('pageload ' + this.props.pageLoad)
        }
    }


    render() {
        return (
            <div className="MessageContainer" id="MessageContainer">
                {this.props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}
                <div id="messageScroll" ref={(el) => { this.messagesEnd = el; }}> </div>
            </div>
        );
    }
}

const mapSateToProps = (state) => {
  return {
      messages: state.messages,
      pageLoad: state.pageLoad,
  }
};

export default connect(mapSateToProps)(List);
