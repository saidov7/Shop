import { useGlobal } from "../context/GlobalContext";

function Cart() {
  const { cart, removeFromCart } = useGlobal();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-details">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
