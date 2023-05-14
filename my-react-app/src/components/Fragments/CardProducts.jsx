import Button from "../Elements/button";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="mx-2 my-3 w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} className="p-8 rounded-t-lg" alt="products" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-lg font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-lg font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>Add to Cart</Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
