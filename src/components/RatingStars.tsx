import { Star } from "lucide-react";

export const RatingStars = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < full ? "text-primary" : "text-muted-foreground"} fill={i < full ? "currentColor" : "none"} />
      ))}
    </div>
  );
};
