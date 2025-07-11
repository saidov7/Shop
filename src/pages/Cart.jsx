import { useGlobal } from "../context/GlobalContext";

export default function Cart() {
  const { cart, removeFromCart } = useGlobal();

  return (
    <div className="container">
      <h2>Savat ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <div className="product-grid">
          {cart.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}>O‘chirish</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
