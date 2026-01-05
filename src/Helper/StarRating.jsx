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
          <Star key={`full-${i}`} size={18} fill="currentColor" />
        ))}

        {/* Half Star */}
        {hasHalfStar && <StarHalf size={18} fill="currentColor" />}

        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={18} className="text-gray-300" />
        ))}
      </div>

      {/* Rating Text */}
      <span className="text-base font-bold text-gray-700 ">
        {rating}/{max}
      </span>
    </div>
  );
}
