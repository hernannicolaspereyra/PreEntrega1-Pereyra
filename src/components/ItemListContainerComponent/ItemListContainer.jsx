import "./ItemListContainer.css"

const ItemListContainer = (Producto) => {
    const { Nombre, Precio } = Producto
    return (

        <div className="itemListContainer">
            <img src="#" alt="imagen-producto" />
            <h2>{Nombre}</h2>
            <h2>U$D{Precio}</h2>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemListContainer