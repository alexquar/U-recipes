
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Recipe from './recipe/Recipe';
import Create from './create/Create';
import Search from './search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
    <BrowserRouter>
   <Navbar />
   <ThemeSelector />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/create" element={<Create />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipe/:id" element={<Recipe />} />
  </Routes>
      
    </BrowserRouter>
  </div>

  );
}

export default App;
