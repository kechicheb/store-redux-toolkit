import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home /> <Products />
            </>
          }
        />
        <Route
          exact
          path="products"
          element={
            <>
              <Products />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="register"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="cart"
          element={
            <>
              <Cart />
            </>
          }
        />
        <Route
          exact
          path="products/:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
