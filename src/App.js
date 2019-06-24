import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import gql from 'graphql-tag';
import './App.css';


const client = new ApolloClient({
  uri: "https://api-apeast.graphcms.com/v1/cjxapd7gq0vjn01g07utz8efw/master"
});

const testQuery = gql`
{
  posts {
    id
    title
    body
    createdAt
  }
}
`
client.query({
  query: testQuery
}).then(res => console.log(res));

class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Apollo</h1>
        </header>
      </div>
      </ApolloProvider>
    )
  }
}

export default App;
