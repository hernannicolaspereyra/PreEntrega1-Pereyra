import logo from "../NavBarComponent/assets/logo-tienda.png"
import "../NavBarComponent/NavBar.css"
import Cart from "../CartComponent/cart.jsx"

const NavBar = () => {
    return (
        <div className="nav">
            <img src={logo} alt="logo-tienda" />
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