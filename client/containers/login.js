import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
const login = gql`
mutation Login($email: String, $password: String){
	login(email: $email, password: $password){
      email
      password
    }
}`;

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null
        }
        this.onLogin = this.onLogin.bind(this)
    }
    onLogin() {
        this.props.login({
            variables: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(() => console.log('success')).catch(e => console.log(e.message))
    }

    render() {
        return (
            <div style={{ width: '80%' }}>
            <h3>Login page</h3>
                <label htmlFor="email" ></label>
                <input id="email" type="text" onChange={e => this.setState({ email: e.target.value })} />
                <label htmlFor="password" ></label>
                <input id="password" type="password" onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={this.onLogin}>Login</button>
            </div>
        );
    }
}

export default compose(
    graphql(login, { name: "login" })
)(Signup);