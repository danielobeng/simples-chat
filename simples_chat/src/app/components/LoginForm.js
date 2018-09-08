import React from 'react';
import './LoginForm.css';
import { connect } from 'react-redux';


class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username_display: '',
            username: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.props.setAuthor(e.target.value)
    }

    onClick(e) {
        this.props.changeUsername();
        e.preventDefault();

        }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('submitUsernameButton').click()
        }
        else if (e.key === ' ') {
            e.preventDefault();
        }
    }


    render() {
        return(
            <div id="loginForm">
                <h1> Your username is now: {this.props.username}</h1>
                    <form>
                        <input type="text"
                               placeholder="Enter name"
                               autoFocus
                               onChange={this.onChange}
                               onKeyPress={this.handleKeyPress}/>
                        <button id="submitUsernameButton" onClick={this.onClick}>Submit</button>
                    </form>
                <span className="border"></span>
            </div>
            )
    };

}

const mapSateToProps = (state) => {
    return {
        username: state.username,
        author: state.author,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthor: (author) => {
            dispatch({
                type: "SET_AUTHOR",
                payload: {author: author}
            })
        },
        changeUsername: () => {
            dispatch({
                type: "CHANGE_USERNAME",
            })
        },
    }
};

export default connect(mapSateToProps, mapDispatchToProps)(LoginForm);
