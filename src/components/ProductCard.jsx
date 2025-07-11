import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 70)}...</p>
      <p><strong>${product.price}</strong></p>
      <div className="btn-group">
        <button onClick={() => addToCart(product)}>Buy</button>
        <Link to={`/product/${product.id}`}>Details</Link>
      </div>
    </div>
  );
}
