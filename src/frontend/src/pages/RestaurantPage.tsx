import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Clock,
  IndianRupee,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { restaurants } from "../data/mockData";

export default function RestaurantPage() {
  const { id } = useParams({ from: "/restaurant/$id" });
  const restaurant = restaurants.find((r) => r.id === id);
  const { addItem, updateQuantity, removeItem, items, setIsOpen } = useCart();
  const [activeTab, setActiveTab] = useState("all");

  if (!restaurant) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-4"
        data-ocid="restaurant.error_state"
      >
        <p className="text-4xl">🍽️</p>
        <h2 className="text-2xl font-bold">Restaurant not found</h2>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const menuCategories = [
    "all",
    ...new Set(restaurant.menu.map((m) => m.category)),
  ];
  const filteredMenu =
    activeTab === "all"
      ? restaurant.menu
      : restaurant.menu.filter((m) => m.category === activeTab);

  const getItemQuantity = (itemId: string) => {
    const cartItem = items.find((i) => i.menuItem.id === itemId);
    return cartItem?.quantity ?? 0;
  };

  const cartItemCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <main className="pb-24">
      {/* Banner */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Link
          to="/"
          className="absolute top-4 left-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
          data-ocid="restaurant.back.button"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold font-heading">{restaurant.name}</h1>
          <p className="text-white/80 mt-1">
            {restaurant.cuisine} · {restaurant.address}
          </p>
        </div>
      </div>

      {/* Info bar */}
      <div className="bg-card border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap gap-6">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-brand-star text-brand-star" />
            <span className="font-semibold">{restaurant.rating}</span>
            <span className="text-muted-foreground text-sm">
              (200+ ratings)
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>{restaurant.deliveryTime} min delivery</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <IndianRupee className="w-4 h-4 text-primary" />
            <span>Min order ₹{restaurant.minOrder}</span>
          </div>
          <div className="flex gap-2">
            {restaurant.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 flex flex-wrap h-auto gap-1 bg-muted p-1">
            {menuCategories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="capitalize"
                data-ocid={`menu.${cat}.tab`}
              >
                {cat === "all" ? "All Items" : cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="space-y-4">
              {filteredMenu.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-card rounded-2xl p-4 flex gap-4 shadow-card"
                  data-ocid={`menu.item.${idx + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`w-3 h-3 rounded-sm border-2 flex-shrink-0 ${
                          item.isVeg ? "border-green-600" : "border-red-600"
                        }`}
                      >
                        <span
                          className={`block w-1.5 h-1.5 rounded-full m-auto mt-0.5 ${
                            item.isVeg ? "bg-green-600" : "bg-red-600"
                          }`}
                        />
                      </span>
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="font-bold text-foreground">₹{item.price}</p>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-end justify-end">
                    {getItemQuantity(item.id) === 0 ? (
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => addItem(item, restaurant)}
                        data-ocid={`menu.add.button.${idx + 1}`}
                      >
                        <Plus className="w-4 h-4 mr-1" /> ADD
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2 border border-primary rounded-lg overflow-hidden">
                        <button
                          type="button"
                          onClick={() => {
                            const q = getItemQuantity(item.id);
                            if (q <= 1) removeItem(item.id);
                            else updateQuantity(item.id, q - 1);
                          }}
                          className="px-2 py-1 hover:bg-muted transition-colors"
                          data-ocid={`menu.decrease.button.${idx + 1}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm font-bold text-primary">
                          {getItemQuantity(item.id)}
                        </span>
                        <button
                          type="button"
                          onClick={() => addItem(item, restaurant)}
                          className="px-2 py-1 hover:bg-muted transition-colors"
                          data-ocid={`menu.increase.button.${idx + 1}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating cart */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40 px-4">
          <Button
            type="button"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full shadow-xl text-base font-semibold"
            onClick={() => setIsOpen(true)}
            data-ocid="restaurant.view_cart.primary_button"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            View Cart · {cartItemCount} items
          </Button>
        </div>
      )}
    </main>
  );
}
