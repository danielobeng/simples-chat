import { getMessages, saveMessage, onNewMessage } from '../storage';
import messages from '../../messages.json';

const initialState = {
    // messages: getMessages(),
    // messages: getMessages().then(messages => {console.log(messages)}),
    messages,
    // messages: getMessages().then(messages => {this.messages = messages}),
    author: '',
};

// getMessages().then(messages => {initialState.messages = messages});
// console.log(initialState.messages)

const reducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case 'SET_AUTHOR':
            newState = {
                ...state,
                author: action.payload.author,
                username: action.payload.author,
            };
            break;
        case 'ON_SUBMIT':
            const {author, text} = state;
            // onSend(author, text);

            newState = {
                ...state,
                author: '',
                text: '',
            };
            break;
        case 'PULL_MESSAGES':
            newState = {
                ...state,
                messages: action.payload.messages
            };
            // console.log(newState.messages)
    }
    return newState
};

export default reducer;

// onSendMessage(author, text) {
//     const newMessage = {
//         id: this.state.messages[this.state.messages.length - 1].id + 1,
//         author: this.props.author,
//         text: text,
//         channel_id: '',
//     };
//
//     saveMessage(newMessage);
//
//     const messages = [...this.state.messages, newMessage];
//     this.setState({ messages });
// };
