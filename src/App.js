import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from "react-apollo";
import gql from 'graphql-tag';
import './App.css';

// Connecting out site to the GraphQL API
const client = new ApolloClient({
  uri: "https://api-apeast.graphcms.com/v1/cjxapd7gq0vjn01g07utz8efw/master"
});

// Writting our  query
const POSTS_QUERY = gql`
{
  posts {
    id
    title
    body
    createdAt
  }
}
`

// // Running our query  outside of React
// client.query({
//   query: testQuery
// }).then(res => console.log(res));



//Apollo Provider attached the client to our React app
class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React with Apollo</h1>
          <Query query = {POSTS_QUERY}>
            {({ loading, data }) => {
              if(loading) return 'Loading...';
              const { posts } = data;
              console.log(posts);
              return posts.map(post => <h3 key={post.id}>{post.title}</h3>)
            }}
          </Query>
        </header>
      </div>
      </ApolloProvider>
    )
  }
}

export default App;
