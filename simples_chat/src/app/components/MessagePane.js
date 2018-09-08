import React from "react";
import MessageInputForm from "./MessageInputForm.js";
import "./MessagePane.css";
import PropTypes from 'prop-types';

import List from './List';

import { connect } from 'react-redux';

class MessagePane extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="MessagePane">
                <List/>
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