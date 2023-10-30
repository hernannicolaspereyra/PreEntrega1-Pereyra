import LogoCarrito from "./assets/logo-carrito.png"
import "../CartComponent/Cart.css"

const Cart = () => {
    return (
        <div className="cart">
            <button><img src={LogoCarrito} alt="carrito-de-compras" /></button>
            <span>5</span>
        </div>
    )
}
export default Cart