import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { Clock, IndianRupee, Star } from "lucide-react";
import type { Restaurant } from "../data/mockData";

interface Props {
  restaurant: Restaurant;
  index: number;
}

export default function RestaurantCard({ restaurant, index }: Props) {
  return (
    <Link
      to="/restaurant/$id"
      params={{ id: restaurant.id }}
      data-ocid={`restaurants.item.${index}`}
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer group">
        <div className="relative overflow-hidden h-48">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {!restaurant.isActive && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary" className="text-sm">
                Currently Closed
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge className="bg-white text-foreground shadow text-xs font-semibold">
              <Star className="w-3 h-3 fill-brand-star text-brand-star mr-1" />
              {restaurant.rating}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-base text-foreground mb-1 truncate font-heading">
            {restaurant.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 truncate">
            {restaurant.cuisine}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {restaurant.deliveryTime} min
            </span>
            <span className="flex items-center gap-1">
              <IndianRupee className="w-3 h-3" />
              Min ₹{restaurant.minOrder}
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {restaurant.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-accent text-accent-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
