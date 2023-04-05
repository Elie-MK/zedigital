import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Services from './pages/service/Services.js';
import IndexPages from './IndexPages.js';
import Realisations from './pages/realisations/Realisations.js';
import Contacter from './pages/Contacter';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<IndexPages/>}>
      <Route index  element={<Homepage/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/realisations" element={<Realisations/>}/>
    </Route>
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
