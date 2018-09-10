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
                // initialDataLoaded: action.payload.initialDataLoaded
                initialDataLoaded: true,
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

