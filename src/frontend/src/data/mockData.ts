export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: number;
  minOrder: number;
  image: string;
  tags: string[];
  isActive: boolean;
  address: string;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "The Spice Garden",
    cuisine: "Indian / Biryani",
    rating: 4.5,
    deliveryTime: 30,
    minOrder: 150,
    image: "/assets/generated/restaurant-spice-garden.dim_600x400.jpg",
    tags: ["Biryani", "Indian", "Spicy"],
    isActive: true,
    address: "42 Spice Lane, MG Road, Bengaluru",
    menu: [
      {
        id: "1-1",
        name: "Hyderabadi Chicken Biryani",
        description:
          "Aromatic basmati rice slow-cooked with tender chicken and secret spice blend",
        price: 220,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "1-2",
        name: "Mutton Seekh Kebab",
        description:
          "Juicy minced mutton skewers grilled over charcoal with fresh herbs",
        price: 280,
        category: "Starters",
        isVeg: false,
      },
      {
        id: "1-3",
        name: "Paneer Tikka",
        description:
          "Marinated cottage cheese cubes grilled to perfection with bell peppers",
        price: 180,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "1-4",
        name: "Dal Makhani",
        description: "Slow-cooked black lentils in rich buttery tomato gravy",
        price: 150,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "1-5",
        name: "Mango Lassi",
        description:
          "Refreshing yogurt drink blended with fresh Alphonso mangoes",
        price: 80,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "1-6",
        name: "Gulab Jamun",
        description:
          "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup",
        price: 90,
        category: "Desserts",
        isVeg: true,
      },
    ],
  },
  {
    id: "2",
    name: "Brew & Bites Cafe",
    cuisine: "Cafe / Sandwiches",
    rating: 4.3,
    deliveryTime: 20,
    minOrder: 100,
    image: "/assets/generated/restaurant-brew-bites.dim_600x400.jpg",
    tags: ["Cafe", "Coffee", "Sandwiches"],
    isActive: true,
    address: "15 Cafe Street, Indiranagar, Bengaluru",
    menu: [
      {
        id: "2-1",
        name: "Flat White",
        description:
          "Double espresso with silky steamed milk, served hot or over ice",
        price: 180,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "2-2",
        name: "Avocado Toast",
        description:
          "Multigrain sourdough with smashed avocado, cherry tomatoes and microgreens",
        price: 220,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "2-3",
        name: "Club Sandwich",
        description:
          "Triple-decker with grilled chicken, bacon, lettuce, tomato and herb mayo",
        price: 250,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "2-4",
        name: "Blueberry Muffin",
        description:
          "Freshly baked muffin bursting with juicy wild blueberries",
        price: 120,
        category: "Desserts",
        isVeg: true,
      },
      {
        id: "2-5",
        name: "Cold Brew Coffee",
        description:
          "12-hour steeped cold brew served over ice with hint of caramel",
        price: 200,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "2-6",
        name: "Veggie Wrap",
        description:
          "Whole wheat wrap with hummus, roasted vegetables and feta cheese",
        price: 190,
        category: "Mains",
        isVeg: true,
      },
    ],
  },
  {
    id: "3",
    name: "Pizza Palace",
    cuisine: "Pizza / Italian",
    rating: 4.7,
    deliveryTime: 35,
    minOrder: 200,
    image: "/assets/generated/restaurant-pizza-palace.dim_600x400.jpg",
    tags: ["Pizza", "Italian", "Pasta"],
    isActive: true,
    address: "88 Pizza Avenue, Koramangala, Bengaluru",
    menu: [
      {
        id: "3-1",
        name: "Margherita Pizza",
        description:
          "Classic Neapolitan-style with San Marzano tomatoes, fresh mozzarella, basil",
        price: 299,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "3-2",
        name: "Pepperoni Feast",
        description:
          "Double pepperoni, mozzarella and tangy pizza sauce on hand-tossed crust",
        price: 399,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "3-3",
        name: "Garlic Bread",
        description:
          "Toasted baguette with herb butter and minced garlic, served with marinara",
        price: 120,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "3-4",
        name: "Pasta Arrabiata",
        description:
          "Penne in spicy tomato sauce with garlic, fresh parsley and parmesan",
        price: 250,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "3-5",
        name: "Tiramisu",
        description:
          "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
        price: 180,
        category: "Desserts",
        isVeg: true,
      },
      {
        id: "3-6",
        name: "Fresh Lemonade",
        description:
          "Freshly squeezed lemonade with mint leaves and a hint of ginger",
        price: 80,
        category: "Beverages",
        isVeg: true,
      },
    ],
  },
  {
    id: "4",
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.2,
    deliveryTime: 25,
    minOrder: 120,
    image: "/assets/generated/restaurant-dragon-wok.dim_600x400.jpg",
    tags: ["Chinese", "Noodles", "Dim Sum"],
    isActive: true,
    address: "27 Dragon Square, HSR Layout, Bengaluru",
    menu: [
      {
        id: "4-1",
        name: "Veg Hakka Noodles",
        description:
          "Stir-fried noodles with crisp vegetables in savory soy and oyster sauce",
        price: 180,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "4-2",
        name: "Chicken Fried Rice",
        description:
          "Wok-tossed rice with chicken, egg, spring onions and Chinese spices",
        price: 200,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "4-3",
        name: "Dim Sum Basket",
        description:
          "Steamed dumplings filled with prawn and pork, served with chilli dipping sauce",
        price: 220,
        category: "Starters",
        isVeg: false,
      },
      {
        id: "4-4",
        name: "Chilli Paneer",
        description:
          "Crispy paneer tossed with bell peppers, onions in spicy Indo-Chinese sauce",
        price: 190,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "4-5",
        name: "Hot & Sour Soup",
        description:
          "Classic tangy soup with mushrooms, bamboo shoots and silken tofu",
        price: 120,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "4-6",
        name: "Mango Pudding",
        description: "Silky smooth mango pudding with fresh mango chunks",
        price: 100,
        category: "Desserts",
        isVeg: true,
      },
    ],
  },
  {
    id: "5",
    name: "Sweet Cravings",
    cuisine: "Desserts / Bakery",
    rating: 4.6,
    deliveryTime: 15,
    minOrder: 80,
    image: "/assets/generated/restaurant-sweet-cravings.dim_600x400.jpg",
    tags: ["Desserts", "Bakery", "Cakes"],
    isActive: true,
    address: "3 Bakery Lane, Jayanagar, Bengaluru",
    menu: [
      {
        id: "5-1",
        name: "Belgian Chocolate Cake",
        description:
          "Rich 3-layer chocolate cake with dark chocolate ganache and praline crunch",
        price: 280,
        category: "Desserts",
        isVeg: true,
      },
      {
        id: "5-2",
        name: "Assorted Macarons (6pcs)",
        description:
          "French macarons in rose, pistachio, salted caramel, and lemon flavours",
        price: 320,
        category: "Desserts",
        isVeg: true,
      },
      {
        id: "5-3",
        name: "Chocolate Brownie",
        description: "Dense fudgy brownie with walnuts and sea salt flakes",
        price: 120,
        category: "Desserts",
        isVeg: true,
      },
      {
        id: "5-4",
        name: "Strawberry Cheesecake",
        description:
          "New York-style baked cheesecake with fresh strawberry compote",
        price: 220,
        category: "Desserts",
        isVeg: true,
      },
      {
        id: "5-5",
        name: "Hot Chocolate",
        description:
          "Rich velvety hot chocolate made with 70% Belgian dark chocolate",
        price: 160,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "5-6",
        name: "Croissant Almond",
        description:
          "Buttery French croissant filled with almond frangipane and sliced almonds",
        price: 140,
        category: "Starters",
        isVeg: true,
      },
    ],
  },
  {
    id: "6",
    name: "Burger Barn",
    cuisine: "Fast Food / Burgers",
    rating: 4.4,
    deliveryTime: 20,
    minOrder: 100,
    image: "/assets/generated/restaurant-burger-barn.dim_600x400.jpg",
    tags: ["Burgers", "Fast Food", "Fries"],
    isActive: true,
    address: "11 Burger Road, Whitefield, Bengaluru",
    menu: [
      {
        id: "6-1",
        name: "Classic Smash Burger",
        description:
          "Double smashed beef patty, American cheese, caramelized onions, pickles, special sauce",
        price: 280,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "6-2",
        name: "Crispy Chicken Burger",
        description:
          "Buttermilk-fried chicken thigh, coleslaw, jalapeño mayo on brioche bun",
        price: 250,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "6-3",
        name: "Loaded Cheese Fries",
        description:
          "Crispy fries topped with nacho cheese, jalapeños and sour cream",
        price: 150,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "6-4",
        name: "Mushroom Swiss Burger",
        description:
          "Beef patty with sautéed mushrooms, Swiss cheese and truffle aioli",
        price: 320,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "6-5",
        name: "Chocolate Milkshake",
        description:
          "Thick creamy chocolate milkshake topped with whipped cream and sprinkles",
        price: 180,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "6-6",
        name: "Onion Rings",
        description:
          "Beer-battered golden onion rings served with smoky BBQ sauce",
        price: 120,
        category: "Starters",
        isVeg: true,
      },
    ],
  },
  {
    id: "7",
    name: "Green Bowl",
    cuisine: "Healthy / Salads",
    rating: 4.1,
    deliveryTime: 25,
    minOrder: 150,
    image: "/assets/generated/restaurant-green-bowl.dim_600x400.jpg",
    tags: ["Healthy", "Salads", "Vegan"],
    isActive: true,
    address: "56 Wellness Way, Sadashivanagar, Bengaluru",
    menu: [
      {
        id: "7-1",
        name: "Quinoa Power Bowl",
        description:
          "Tri-color quinoa with roasted chickpeas, avocado, sweet potato and tahini dressing",
        price: 280,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "7-2",
        name: "Grilled Chicken Caesar",
        description:
          "Romaine lettuce, grilled chicken, croutons, parmesan with classic Caesar dressing",
        price: 260,
        category: "Mains",
        isVeg: false,
      },
      {
        id: "7-3",
        name: "Acai Bowl",
        description:
          "Blended acai with banana, topped with granola, fresh berries and honey drizzle",
        price: 220,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "7-4",
        name: "Green Smoothie",
        description:
          "Spinach, kale, banana, mango and coconut water blended fresh",
        price: 180,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "7-5",
        name: "Buddha Bowl",
        description:
          "Brown rice, edamame, cucumber, pickled ginger, tofu and miso-ginger dressing",
        price: 270,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "7-6",
        name: "Chia Pudding",
        description:
          "Overnight chia seeds in almond milk with mango and passion fruit coulis",
        price: 160,
        category: "Desserts",
        isVeg: true,
      },
    ],
  },
  {
    id: "8",
    name: "Chai Corner",
    cuisine: "Cafe / Indian",
    rating: 4.8,
    deliveryTime: 10,
    minOrder: 50,
    image: "/assets/generated/restaurant-chai-corner.dim_600x400.jpg",
    tags: ["Cafe", "Chai", "Indian"],
    isActive: true,
    address: "1 Tea Garden Road, Malleswaram, Bengaluru",
    menu: [
      {
        id: "8-1",
        name: "Masala Chai",
        description:
          "Traditional spiced tea brewed with ginger, cardamom, cinnamon and fresh milk",
        price: 60,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "8-2",
        name: "Samosa (2 pcs)",
        description:
          "Crispy potato-filled pastry triangles served with mint and tamarind chutney",
        price: 70,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "8-3",
        name: "Khari Biscuit",
        description: "Flaky puff pastry biscuits, perfect chai companion",
        price: 50,
        category: "Starters",
        isVeg: true,
      },
      {
        id: "8-4",
        name: "Poha",
        description:
          "Flattened rice sautéed with onions, curry leaves, peanuts and fresh coriander",
        price: 80,
        category: "Mains",
        isVeg: true,
      },
      {
        id: "8-5",
        name: "Irani Chai",
        description:
          "Rich creamy Hyderabadi-style tea with condensed milk, slow simmered to perfection",
        price: 80,
        category: "Beverages",
        isVeg: true,
      },
      {
        id: "8-6",
        name: "Bun Maska",
        description:
          "Soft dinner bun generously slathered with homemade white butter",
        price: 60,
        category: "Starters",
        isVeg: true,
      },
    ],
  },
];

export const categories = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "Fast Food", label: "Fast Food", emoji: "🍔" },
  { id: "Cafe", label: "Cafe", emoji: "☕" },
  { id: "Pizza", label: "Pizza", emoji: "🍕" },
  { id: "Biryani", label: "Biryani", emoji: "🍛" },
  { id: "Desserts", label: "Desserts", emoji: "🍰" },
  { id: "Chinese", label: "Chinese", emoji: "🥡" },
  { id: "Burgers", label: "Burgers", emoji: "🍔" },
  { id: "Healthy", label: "Healthy", emoji: "🥗" },
];
