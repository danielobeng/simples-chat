import messages from '../../messages.json';

const initialState = {
    messages,
    author: '',
    username: '',
    text: '',
    id: '' ,
    channel_id: '',
};

const reducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {

        case 'SET_AUTHOR':
            newState = {
                ...state,
                author: action.payload.author,
            };
            break;
        case 'ON_SEND':
            newState = {
                ...state,
                text: action.payload.text,
            };
            break;
        case 'PULL_MESSAGES':
            newState = {
                ...state,
                messages: action.payload.messages
            };
            break;
        case 'CHANGE_USERNAME':
            newState = {
                ...state,
                username: state.author
            };
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
