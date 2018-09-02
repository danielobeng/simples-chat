import React from 'react';
import PropTypes from 'prop-types';
import './MessgeInputForm.css';

// TODO: Add more functionality eg emoji, image attachment etc

class MessageInputForm extends React.Component {
    constructor() {
        super();

        this.state = {
            author: '',
            text: ''
        };

        this.updateMessage = this.updateMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };


    onSubmit() {
        const {author, text} = this.state;
        this.props.onSend(author, text);
        this.setState({ author: '', text: '' })
    };

    updateMessage(event) {
        this.setState(
            {
                 text: event.target.value
            }
        )
    };

    // updateName(event) {
    //     this.setState(
    //         {
    //             name: event.target.value
    //         }
    //     )
    // };

    render() {
        return (
            <div className="MessageInputForm">
                <form className="form-group">
                    <label >Message Input</label>
                    <textarea
                        value={this.state.text}
                        onChange={this.updateMessage}
                        id="messageInput"
                        className="form-control"
                        cols="100"
                        rows="5">g</textarea>
                </form>
                <button className="send btn btn-primary" onClick={this.onSubmit}>Send</button>
            </div>
        );
    }
}

MessageInputForm.defaultProps = {
    onSend: () => {}
};

MessageInputForm.propTypes = {
    onSend: PropTypes.func.isRequired
};



export default MessageInputForm;