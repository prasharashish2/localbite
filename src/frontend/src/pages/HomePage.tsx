import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { categories, restaurants } from "../data/mockData";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const filtered = useMemo(() => {
    let result = restaurants;
    if (activeCategory !== "all") {
      result = result.filter((r) =>
        r.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase()),
      );
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisine.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return [...result].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "delivery") return a.deliveryTime - b.deliveryTime;
      if (sortBy === "minOrder") return a.minOrder - b.minOrder;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[480px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-food-collage.dim_1920x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-4"
          >
            Order From Your Favourite Local Spots
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/80 mb-8"
          >
            Fresh food from the best restaurants and cafes in your
            neighbourhood, delivered fast.
          </motion.p>

          {/* CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-full p-2 flex items-center gap-2 shadow-xl max-w-xl mx-auto"
          >
            <div className="flex items-center gap-2 pl-3 flex-shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground hidden sm:inline">
                Bengaluru
              </span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
            <div className="w-px h-6 bg-border" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for food, cafes, dishes…"
              className="flex-1 border-0 shadow-none focus-visible:ring-0 bg-transparent"
              data-ocid="hero.search_input"
            />
            <Button
              type="button"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 flex-shrink-0"
              data-ocid="hero.find_food.primary_button"
            >
              Find Food
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <section className="bg-background py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-heading mb-5">
              Explore Categories
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  data-ocid={`category.${cat.id === "all" ? "all" : cat.label.toLowerCase().replace(/ /g, "_")}.tab`}
                  className="flex flex-col items-center gap-2 flex-shrink-0 group"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
                      activeCategory === cat.id
                        ? "bg-primary shadow-md scale-110"
                        : "bg-brand-peach hover:bg-primary/20"
                    }`}
                  >
                    {cat.emoji}
                  </div>
                  <span
                    className={`text-xs font-medium whitespace-nowrap ${
                      activeCategory === cat.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Filters + Sort */}
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <h2 className="text-2xl font-bold font-heading">
              {activeCategory === "all"
                ? "Popular Restaurants Near You"
                : `${categories.find((c) => c.id === activeCategory)?.label} Restaurants`}
            </h2>
            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger
                  className="w-40"
                  data-ocid="restaurants.sort.select"
                >
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="delivery">Fastest Delivery</SelectItem>
                  <SelectItem value="minOrder">Min Order</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div
              className="text-center py-20"
              data-ocid="restaurants.empty_state"
            >
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="text-xl font-bold mb-2">No restaurants found</h3>
              <p className="text-muted-foreground">
                Try a different search or category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <RestaurantCard restaurant={r} index={i + 1} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
