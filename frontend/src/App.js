import logo from "./logo.svg";
import "./App.css";

import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h1>Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
