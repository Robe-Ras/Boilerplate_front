const basename = import.meta.env.VITE_BASENAME || '/thp_marketplace';

// App components
import Header from "./components/Header";
import Footer from "./components/Footer";

// App pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// external
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { PrivateRoute, loadCookie } from "./app/helpers";
import { noUser, userAtom } from "./app/atoms"; // Corrected import path
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
      setUser(loadCookie() ? loadCookie() : noUser);  
  }, []);
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
