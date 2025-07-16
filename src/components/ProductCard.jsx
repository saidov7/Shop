import { useGlobal } from "../context/GlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductCard({ product }) {
  const { addToCart, favorites, toggleFavorite } = useGlobal();
  const isFavorited = favorites.includes(product.id);

  return (
    <div className="product-card">
      <div className="product-heart" onClick={() => toggleFavorite(product.id)}>
        {isFavorited ? (
          <FaHeart color="red" size={20} />
        ) : (
          <FaRegHeart color="gray" size={20} />
        )}
      </div>

      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Buy</button>
    </div>
  );
}

export default ProductCard;
