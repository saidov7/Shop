import { useGlobal } from "../context/GlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ProductCard({ product }) {
  const { addToCart, favorites, toggleFavorite } = useGlobal();
  const isFavorited = favorites.includes(product.id);

  return (
    <div className="product-card">
      <div className="product-heart" onClick={() => toggleFavorite(product.id)}>
        {isFavorited ? (
          <FaHeart color="red" size={22} />
        ) : (
          <FaRegHeart color="gray" size={22} />
        )}
      </div>

      <img src={product.image} alt={product.title} className="product-img" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button className="product-buy-btn" onClick={() => addToCart(product)}>Buy</button>
    </div>
  );
}

export default ProductCard;
