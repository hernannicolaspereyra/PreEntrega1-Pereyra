import NavBar from './components/NavBarComponent/NavBar'
import ItemListContainer from './components/ItemListContainerComponent/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer Nombre = "Pc" Precio = "300" />
    </div>   
  )
}

export default App
