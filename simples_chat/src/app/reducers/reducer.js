const initialState = {
    initialDataLoaded: false,
    author: '',
    username: '',
    text: '',
    id: '' ,
    channel_id: '',
    pageLoad: true
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
                pageLoad: action.payload.pageLoad,
            };
            break;
        case 'PULL_MESSAGES':
            newState = {
                ...state,
                messages: action.payload.messages,
                initialDataLoaded: action.payload.initialDataLoaded
            };
            break;
        case 'CHANGE_USERNAME':
            newState = {
                ...state,
                username: state.author
            };
            break;
        default: {}
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
