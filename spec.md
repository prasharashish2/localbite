# LocalBite - Food Delivery App

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Home page with hero banner, category filters (Fast Food, Cafe, Pizza, Desserts, Biryani, etc.)
- Restaurant/cafe listings with name, cuisine type, rating, delivery time, min order
- Restaurant detail page with full menu organized by categories
- Menu item cards with image, name, description, price, add-to-cart button
- Shopping cart with item list, quantities, subtotal, delivery fee, grand total
- Checkout flow with address input and order placement
- Order confirmation screen
- Admin panel: manage restaurants, menu items, and orders
- Role-based access: admin and customer roles
- Search and filter by cuisine/rating/delivery time

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: Restaurant store, menu items, cart/order management, admin CRUD APIs, authorization for admin vs customer
2. Frontend: Home, Restaurant list, Restaurant detail/menu, Cart, Checkout, Order confirmation, Admin dashboard
3. Seed data: 6-8 sample local restaurants/cafes with menu items
4. Authorization component for role-based access (admin/customer)
