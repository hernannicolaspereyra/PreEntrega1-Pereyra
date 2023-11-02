import NavBar from './components/NavBarComponent/NavBar'
import ItemListContainer from './components/ItemListContainerComponent/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a Tienda Gamer" />
    </div>   
  )
}

export default App
