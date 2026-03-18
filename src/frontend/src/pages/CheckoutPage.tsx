import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Bengaluru",
    pincode: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPlacing, setIsPlacing] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[0-9]{10}$/.test(form.phone))
      e.phone = "Enter a valid 10-digit phone number";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!/^[0-9]{6}$/.test(form.pincode))
      e.pincode = "Enter a valid 6-digit pincode";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsPlacing(true);
    await new Promise((r) => setTimeout(r, 1000));
    clearCart();
    navigate({ to: "/order-confirmation" });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Your cart is empty</p>
        <Link to="/">
          <Button>Browse Restaurants</Button>
        </Link>
      </div>
    );
  }

  const field = (
    key: keyof typeof form,
    label: string,
    type = "text",
    placeholder = "",
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={key}>{label}</Label>
      <Input
        id={key}
        type={type}
        placeholder={placeholder || label}
        value={form[key]}
        onChange={(e) => {
          setForm((p) => ({ ...p, [key]: e.target.value }));
          setErrors((p) => ({ ...p, [key]: "" }));
        }}
        className={errors[key] ? "border-destructive" : ""}
        data-ocid={`checkout.${key}.input`}
      />
      {errors[key] && (
        <p
          className="text-xs text-destructive"
          data-ocid={`checkout.${key}_error`}
        >
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <main className="bg-background min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          data-ocid="checkout.back.link"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1 className="text-3xl font-bold font-heading mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Delivery Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {field("name", "Full Name", "text", "Ravi Kumar")}
                  {field("phone", "Phone Number", "tel", "9876543210")}
                  {field(
                    "address",
                    "Street Address",
                    "text",
                    "123, MG Road, Apt 4B",
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    {field("city", "City")}
                    {field("pincode", "Pincode", "text", "560001")}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
                    disabled={isPlacing}
                    data-ocid="checkout.place_order.submit_button"
                  >
                    {isPlacing ? "Placing Order…" : `Place Order · ₹${total}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground">
                      {item.menuItem.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ₹{item.menuItem.price * item.quantity}
                    </span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
