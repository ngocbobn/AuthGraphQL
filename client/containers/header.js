import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import userQuery from '../queries/currentUser';

class Header extends Component {
    render() {
        console.log(this.props.data.user)
        return (
            <div>
                <h2>Header</h2>
            </div>
        );
    }
}

export default graphql(userQuery)(Header);