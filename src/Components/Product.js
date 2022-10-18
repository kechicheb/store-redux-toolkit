import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <div className="col-md-3 mb-4" key={product.id}>
    <div className="card h-100 text-center p-4" >
      <div className="image">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          height="250px"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
        <p className="card-text lead fw-bold">${product.price}</p>
        <Link className="btn btn-outline-dark" to={`/products/${product.id}`}>
          Buy Now
        </Link>
      </div>
    </div>
    </div>
  );
}
