import Guitarra from 'pages/Guitarra';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import Inicio from './pages/Inicio';
import ProdutosMarcas from './pages/ProdutosMarcas';

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='produtos/' element={<ProdutosMarcas />}/>
            <Route path='guitarras/:id' element={<Guitarra />}/>
          </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
