import NavBar from './components/NavBarComponent/NavBar'
import ItemListContainer from './components/ItemListContainerComponent/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Game Store"}/>
    </div>   
  )
}

export default App
