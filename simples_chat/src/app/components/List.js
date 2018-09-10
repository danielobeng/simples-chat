import React from 'react';
import { connect } from 'react-redux';
import './List.css';


const Spinner = function () {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-eclipse">
                <div> </div>
            </div>
        </div>
    )
};

const Message = function(props) {
        return (
        <div className="Message">
            <div className="authorProp">{props.author}</div>
            <div className="textProp">{props.text}</div>
        </div>
        )
};

const MessageLoader = function(props) {
    if (props.loadState === true) {
        return (
            <div>
                {props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}
            </div>
        )
    }
    else {
        return (
            <Spinner/>
        )
    }
};

class List extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

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
                <MessageLoader messages={this.props.messages} loadState={this.props.initialDataLoaded}/>
                {/*{this.props.messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/>)}*/}
                <div id="messageScroll" ref={(el) => { this.messagesEnd = el; }}> </div>
            </div>
        );
    }
}

const mapSateToProps = (state) => {
  return {
      messages: state.messages,
      pageLoad: state.pageLoad,
      initialDataLoaded: state.initialDataLoaded,

  }
};

export default connect(mapSateToProps)(List);
