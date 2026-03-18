import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Home } from "lucide-react";
import { motion } from "motion/react";

export default function OrderConfirmationPage() {
  const orderId = `LB${Math.floor(100000 + Math.random() * 900000)}`;
  const eta = Math.floor(25 + Math.random() * 20);

  return (
    <main className="min-h-[80vh] bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center max-w-md"
        data-ocid="order_confirmation.section"
      >
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-14 h-14 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold font-heading mb-2">
          Order Placed! 🎉
        </h1>
        <p className="text-muted-foreground mb-6">
          Your delicious food is being prepared.
        </p>

        <div className="bg-card rounded-2xl p-6 shadow-card mb-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Order ID</span>
            <span className="font-bold text-sm font-mono">{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">
              Estimated Delivery
            </span>
            <span className="flex items-center gap-1 font-bold text-sm">
              <Clock className="w-4 h-4 text-primary" />
              {eta} minutes
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Status</span>
            <span className="text-green-600 font-semibold text-sm">
              Confirmed
            </span>
          </div>
        </div>

        <Link to="/">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            data-ocid="order_confirmation.home.primary_button"
          >
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
