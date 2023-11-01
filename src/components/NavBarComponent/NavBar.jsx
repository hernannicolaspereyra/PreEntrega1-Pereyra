import logo from "../NavBarComponent/assets/logo-tienda.png"
import "../NavBarComponent/NavBar.css"
import Cart from "../CartComponent/cart.jsx"

const NavBar = () => {
    return (
        <div className="nav">
            <div>
                <img src={logo} alt="logo-tienda" />
                <h1>Game Store</h1>
            </div>
            <ul>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Nosotros</button>
                <button>Contacto</button>
                <Cart />
            </ul>
        </div>
    )
}

export default NavBar