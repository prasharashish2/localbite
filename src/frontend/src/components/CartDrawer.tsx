import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNavigate } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    subtotal,
    totalItems,
  } = useCart();
  const navigate = useNavigate();
  const deliveryFee = totalItems > 0 ? 40 : 0;

  const handleCheckout = () => {
    setIsOpen(false);
    navigate({ to: "/checkout" });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-full max-w-md flex flex-col p-0"
        data-ocid="cart.sheet"
      >
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Cart
            {totalItems > 0 && (
              <span className="text-sm font-normal text-muted-foreground">
                ({totalItems} items)
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div
            className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8"
            data-ocid="cart.empty_state"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Your cart is empty</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Add items from a restaurant to get started
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setIsOpen(false)}
              variant="outline"
              data-ocid="cart.close_button"
            >
              Browse Restaurants
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                From {items[0]?.restaurant.name}
              </p>

              {items.map((item, idx) => (
                <div
                  key={item.menuItem.id}
                  className="flex items-center gap-3"
                  data-ocid={`cart.item.${idx + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {item.menuItem.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ₹{item.menuItem.price} each
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.menuItem.id, item.quantity - 1)
                      }
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      data-ocid={`cart.decrease.button.${idx + 1}`}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.menuItem.id, item.quantity + 1)
                      }
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      data-ocid={`cart.increase.button.${idx + 1}`}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-sm font-semibold w-16 text-right">
                    ₹{item.menuItem.price * item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.menuItem.id)}
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                    data-ocid={`cart.delete_button.${idx + 1}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t px-6 py-4 space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>₹{subtotal + deliveryFee}</span>
                </div>
              </div>
              <Button
                type="button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleCheckout}
                data-ocid="cart.checkout.primary_button"
              >
                Proceed to Checkout · ₹{subtotal + deliveryFee}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
