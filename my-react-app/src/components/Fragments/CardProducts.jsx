import { Link } from "react-router-dom";
import Button from "../Elements/button";

import { useDispatch } from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="mx-2 my-3 w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { id, image } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        className="p-8 rounded-t-lg h-60 w-full object-cover"
        alt="products"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-lg font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-m text-white">{children.substring(0, 100)} ...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
