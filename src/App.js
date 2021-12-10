import { useState } from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"


function App() {

  const [search, setSearch] = useState("")

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/search" element={<Search />}/>
        </Routes>


    </div>
    </Router>

  );
}

export default App;
