import React, { useState } from 'react'

const Basic2 = () => {
    const [product, setProducts] = useState({ name: '', price: '' });
    const [items, setItems] = useState([]);

    const newItems = () => {
        setItems([...items, {
            id: items.length,
            name: "Hello React"
        }]);
    }

    const resetItems = () => {
        setItems([]);
    }

    return (
        <div>
            {/* <form>
                <input type="text" value={product.name} onChange={evt => setProducts({ ...product, name: evt.target.value })} />
                <input type="text" value={product.price} onChange={evt => setProducts({ ...product, price: evt.target.value })} />
            </form>
            <h3>Product name is {product.name}</h3>
            <h3>Product price is {product.price} $</h3> */}

            <button onClick={newItems}>Add New Item</button>
            <button onClick={resetItems}>Reset Item</button>
            <ul>
                {items.map((item) => (
                    < li key={item.id} > {item.name} : {item.id}</li>
                ))}
            </ul>
        </div >
    )
}

export default Basic2