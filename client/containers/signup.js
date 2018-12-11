import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
const signup = gql`
mutation Signup($email: String, $password: String){
	signup(email: $email, password: $password){
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
        this.onSignup = this.onSignup.bind(this)
    }
    onSignup() {
        this.props.signup({
            variables: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(() => console.log('success')).catch(e => console.log(e.message))
    }

    render() {
        return (
            <div style={{ width: '80%' }}>
                <h3>Signup page</h3>
                <label htmlFor="email" ></label>
                <input id="email" type="text" onChange={e => this.setState({ email: e.target.value })} />
                <label htmlFor="password" ></label>
                <input id="password" type="password" onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={this.onSignup}>Signup</button>
            </div>
        );
    }
}

export default compose(
    graphql(signup, { name: "signup" })
)(Signup);