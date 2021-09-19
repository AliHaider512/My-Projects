import React, {Component} from "react";
import './index.css';
import './App.css';
import { ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from,} from "@apollo/client";
import GetJobs from "./components/GetJobs";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import detail from "./components/detail";

const link = from([
  
  new HttpLink({ uri: "https://api.graphql.jobs/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      {" "}
       
       <Switch>
       <Route path="/" component={GetJobs } exact />
       <Route path="/detail" component={detail} />
       
   </Switch>
    </ApolloProvider>
  );
}

export default App;

