import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Home from './containers/home';
import App from './containers/app';
import Signup from './containers/signup';
import Login from './containers/login';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} ></IndexRoute>
          <Route path="dashboard" component={Home} />
          <Route path="signup" component={Signup} />
          <Route path="login" component={Login} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
