import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

import { CartContexProvider } from './contexts/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <BrowserRouter>
      <CartContexProvider>
              <NavBar/> 
              <Routes>
                <Route path='/' element={ <ItemListContainer/>} />
                <Route path='/category/:cid' element={ <ItemListContainer/>} />
                <Route path='/detail/:pid' element={ <ItemDetailContainer/> } />
                <Route path='/cart' element={ <CartContainer/> } />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
      </CartContexProvider>
        </BrowserRouter>
  )
}

export default App
