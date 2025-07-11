import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGlobal } from "../context/GlobalContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useGlobal();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Yuklanmoqda...</p>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={() => addToCart(product)}>Savatga qo‘shish</button>
      </div>
    </div>
  );
}
