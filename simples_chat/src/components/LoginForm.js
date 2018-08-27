import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            username: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    completed() {
        alert(`Success! Your username will be ${this.state.username}`)
    }


    render() {
        return(
            <div>
                <h1> Your username will be: {this.state.username}</h1>
                <form>
                    <input type="text" placeholder="Enter name" onChange={this.onChange}/>
                    <input type="submit" onSubmit={this.onSubmit} />
                </form>
            </div>
            )
    };

}

export default LoginForm;