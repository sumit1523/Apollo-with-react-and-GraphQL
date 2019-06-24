import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import './App.css';


const client = new ApolloClient({
  uri: "https://api-apeast.graphcms.com/v1/cjxapd7gq0vjn01g07utz8efw/master"
});

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
