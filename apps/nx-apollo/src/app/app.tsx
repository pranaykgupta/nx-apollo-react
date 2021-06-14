import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation
} from '@apollo/client';
import React, { Component } from 'react';
import './app.module.css';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

const Students = gql`
  query allSets {
    allSets{
      id,
      name
    }
  }
`;

const AddStudent = gql`
  mutation addSet {
    addSet(name: "Poonam Sareen") {
      id
  }
  }
`;

class App extends Component{
  render(){
    return(
      <ApolloProvider client={client}>
        <h1>Connecting React and GraphQl using apollo</h1>
        <div className="flex">
          <StudentsData />
        </div>
      </ApolloProvider>
    )
  }
} 

function StudentsData(){
  const { loading, error, data } = useQuery(Students);
  if(loading) return <p>Loading..</p>
  if(error) return <p>Error...</p>
  return data.allSets.map( ({id, name}) => (

    <div key={id}>
      <p>
        {id} : {name}
      </p>
    </div>
  ));
}


export default App;