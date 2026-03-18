import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { restaurants as initialRestaurants } from "../data/mockData";

const mockOrders = [
  {
    id: "LB-001",
    restaurant: "The Spice Garden",
    customer: "Priya Sharma",
    total: 450,
    status: "Delivered",
    time: "12:30 PM",
  },
  {
    id: "LB-002",
    restaurant: "Pizza Palace",
    customer: "Rahul Gupta",
    total: 699,
    status: "On the Way",
    time: "1:05 PM",
  },
  {
    id: "LB-003",
    restaurant: "Chai Corner",
    customer: "Ananya Patel",
    total: 140,
    status: "Preparing",
    time: "1:20 PM",
  },
  {
    id: "LB-004",
    restaurant: "Burger Barn",
    customer: "Vikram Singh",
    total: 550,
    status: "Delivered",
    time: "11:45 AM",
  },
  {
    id: "LB-005",
    restaurant: "Green Bowl",
    customer: "Meena Iyer",
    total: 540,
    status: "Confirmed",
    time: "1:35 PM",
  },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  "On the Way": "bg-blue-100 text-blue-700",
  Preparing: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-purple-100 text-purple-700",
};

export default function AdminPage() {
  const [restaurantList, setRestaurantList] = useState(
    initialRestaurants.map((r) => ({ ...r })),
  );

  const toggleActive = (id: string) => {
    setRestaurantList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isActive: !r.isActive } : r)),
    );
  };

  return (
    <main className="bg-background min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          data-ocid="admin.back.link"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold font-heading mb-2">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground mb-8">
          Manage restaurants and view orders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Restaurants",
              value: restaurantList.length,
              color: "text-primary",
            },
            {
              label: "Active",
              value: restaurantList.filter((r) => r.isActive).length,
              color: "text-green-600",
            },
            {
              label: "Total Orders",
              value: mockOrders.length,
              color: "text-blue-600",
            },
            {
              label: "Delivered Today",
              value: mockOrders.filter((o) => o.status === "Delivered").length,
              color: "text-purple-600",
            },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="restaurants">
          <TabsList className="mb-6">
            <TabsTrigger value="restaurants" data-ocid="admin.restaurants.tab">
              Restaurants
            </TabsTrigger>
            <TabsTrigger value="orders" data-ocid="admin.orders.tab">
              Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="restaurants">
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Management</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table data-ocid="admin.restaurants.table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Restaurant</TableHead>
                      <TableHead>Cuisine</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Delivery</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Active</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {restaurantList.map((r, idx) => (
                      <TableRow
                        key={r.id}
                        data-ocid={`admin.restaurants.row.${idx + 1}`}
                      >
                        <TableCell className="font-medium">{r.name}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {r.cuisine}
                        </TableCell>
                        <TableCell>⭐ {r.rating}</TableCell>
                        <TableCell>{r.deliveryTime} min</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              r.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }
                          >
                            {r.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Switch
                            checked={r.isActive}
                            onCheckedChange={() => toggleActive(r.id)}
                            data-ocid={`admin.restaurant.switch.${idx + 1}`}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table data-ocid="admin.orders.table">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Restaurant</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((order, idx) => (
                      <TableRow
                        key={order.id}
                        data-ocid={`admin.orders.row.${idx + 1}`}
                      >
                        <TableCell className="font-mono text-sm">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {order.restaurant}
                        </TableCell>
                        <TableCell className="font-semibold">
                          ₹{order.total}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {order.time}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}
                          >
                            {order.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
