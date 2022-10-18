import React from "react";
import "../Cart.css";
import { useSelector,useDispatch } from "react-redux";
import { addCart, delCart, destroyCart, clear } from "../rtk/slices/cart-slice";
export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Carts = (props) => {
    const { product } = props;
    return (
      <div className="row pt-3" key={product.id}>
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.title}
            height="200px"
            width="180px"
          />
        </div>
        <div className="col-md-4">
          <h3>{product.title}</h3>
          <p className="lead fw-bold">
            {product.qty} × ${product.price} = $
            {(product.qty * product.price).toFixed(2)}
          </p>
          <button
            className="btn btn-outline-dark me-4"
            onClick={() => dispatch(delCart(product))}
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            className="btn btn-outline-dark me-4"
            onClick={() => dispatch(addCart(product))}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(destroyCart(product))}
          >
            Remove
          </button>
        </div>
      </div>
    );
  };
  const Content = () => {
    return (
      <>
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="btn btn-danger" onClick={() => dispatch(clear())}>
            Remove all
          </h5>
        </div>
        {products.map((product) => {
          return <Carts product={product} />;
        })}
        <hr />
      </>
    );
  };
  return (
    <div className="container my-5 py-5">
      {" "}
      {products.length ===0 ?   <h1>Not cart</h1>:<Content />}
    </div>
  );
}
