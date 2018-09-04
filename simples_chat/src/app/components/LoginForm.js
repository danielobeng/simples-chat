import React from 'react';
import './LoginForm.css';


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
        this.setState({
            username: e.target.value,
        })
    }

    onClick(e) {
        e.preventDefault();
        this.setState({
            username_display: this.state.username,
            });
        this.props.onSubmit(this.state.username);
        }

    render() {
        return(
            <div id="loginForm">
                <h1> Your username is now: {this.state.username_display}</h1>
                <form>
                    <input type="text" placeholder="Enter name" onChange={this.onChange}/>
                </form>
                <button onClick={this.onClick}>Submit</button>
                <span className="border"></span>
            </div>
            )
    };

}

export default LoginForm;