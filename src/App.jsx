//import './App.css'


import NavBar from './components/NavBar/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  
  return (
    <>
      <NavBar/> 
      <ItemListContainer
        greeting= {'Bienvenidos'}
      />
      
    </>
  )
}

export default App
