import "./App.css";
import { ApolloClient, ApolloProvider } from "@apollo/client";

import BookList from "./components/BookList";

const client = new ApolloClient({
  uri: "http:/books.dev/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main" className="App">
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
