import { RouterProvider } from "react-router-dom";
import router from "./routes/RoutesrApp";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./Components/cartpage/CartContext";

export default function App() {
  return (
    <CartProvider>
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
    </CartProvider>
  );
}
