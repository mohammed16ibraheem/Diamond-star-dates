import Image from "next/image";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          width={320}
          height={320}
          sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 280px"
        />
      </div>

      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </article>
  );
}
