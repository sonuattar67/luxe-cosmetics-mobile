import { Link } from "react-router-dom";
import { RatingStars } from "./RatingStars";

export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  description?: string;
  brand?: string;
  category?: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block group hover-scale animate-fade-in" aria-label={`${product.title} details`}>
      <article className="rounded-xl border bg-card text-card-foreground overflow-hidden shadow-elegant hover:shadow-glow transition-shadow">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.thumbnail}
            alt={`${product.title} product image`}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-3 space-y-2">
          <h3 className="text-sm font-semibold">{product.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold">${product.price}</span>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
