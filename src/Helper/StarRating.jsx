import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating, max = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
      {/* Stars */}
      <div className="flex items-center gap-1 text-yellow-400">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`}  fill="currentColor" className="w-4 h-4"/>
        ))}

        {/* Half Star */}
        {hasHalfStar && <StarHalf  fill="currentColor" className="w-4 h-4"/>}

        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`}  className="w-4 h-4 text-gray-300" />
        ))}
      </div>

      {/* Rating Text */}
      <span className="text-base font-bold text-gray-700 ">
        {rating}/{max}
      </span>
    </div>
  );
}
