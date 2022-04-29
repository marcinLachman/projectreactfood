import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppProvider from './AppContext';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import Advice from './pages/Advice';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Errorpage from './pages/Errorpage';

import './style//App.css';

function App() {
  return (

    <AppProvider>
      <Router>
        <nav>
          <Navigation />
        </nav>

        <main>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/Recipes/' element={ <Recipes />} />
            <Route path='/Recipes/:link' element={ <Recipe />} />
            <Route path='/Advice' element={ <Advice />} />
            <Route path='/Contact' element={ <Contact />} />
            <Route path='/*' element={ <Errorpage />} />
          </Routes>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </Router>
    </AppProvider>

  );
}

export default App;
// "homepage": "https://marcinlachman.github.io/projectreactfood",