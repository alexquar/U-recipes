
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Recipe from './recipe/Recipe';
import Create from './create/Create';
import Search from './search/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/create" element={<Create />} />
      <Route path="/search" element={<Search />} />
  </Routes>
      
    </BrowserRouter>
  </div>

  );
}

export default App;
