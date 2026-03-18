import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "@tanstack/react-router";
import { Flame, MapPin, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/", search: { q: searchValue } });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Flame className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-heading text-foreground">
            LocalBite
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 ml-4">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-ocid="nav.home.link"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-ocid="nav.restaurants.link"
          >
            Restaurants
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-ocid="nav.offers.link"
          >
            Offers
          </Link>
          <Link
            to="/admin"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            data-ocid="nav.admin.link"
          >
            Admin
          </Link>
        </nav>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-sm ml-auto"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for food, cafes, dishes…"
              className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
              data-ocid="nav.search_input"
            />
          </div>
        </form>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto md:ml-4">
          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">Bengaluru</span>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="relative"
            onClick={() => setIsOpen(true)}
            data-ocid="nav.cart.button"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline ml-1">Cart</span>
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-[10px] bg-primary text-primary-foreground">
                {totalItems}
              </Badge>
            )}
          </Button>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-3 space-y-3">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for food..."
              className="pl-9"
              data-ocid="nav.mobile_search_input"
            />
          </form>
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-sm font-medium py-2"
              data-ocid="nav.mobile_home.link"
            >
              Home
            </Link>
            <Link
              to="/admin"
              className="text-sm font-medium py-2"
              data-ocid="nav.mobile_admin.link"
            >
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
