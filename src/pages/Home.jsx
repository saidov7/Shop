import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useGlobal } from "../context/GlobalContext";

export default function Home() {
  const products = useFetch("https://dummyjson.com/products");
  const { addToCart } = useGlobal();

  return (
    <div className="container">
      <h2>Barcha Mahsulotlar</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <div className="button-group">
              <Link to={`/product/${p.id}`} className="details-link">Batafsil</Link>
              <button className="buy-btn" onClick={() => addToCart(p)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
