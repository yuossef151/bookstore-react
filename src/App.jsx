import { RouterProvider } from "react-router-dom";
import router from "./routes/RoutesrApp";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./Components/cartpage/CartContext";
import { WishlistProvider } from "./Components/Wishlistpage/WishlistContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />;
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
    
  );
}
