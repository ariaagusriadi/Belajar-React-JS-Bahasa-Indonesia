import { Fragment } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/button";
import Counter from "../components/Fragments/COunter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp.1.000.000",
    image: "/images/products-1.jpg",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus
       ab in nam, neque ex eaque sed ipsum! Illo magni totam nemo commodi
       atque ullam est odio optio at inventore.`,
  },
  {
    id: 2,
    name: "Sepatu Baru 2",
    price: "Rp.2.000.000",
    image: "/images/products-1.jpg",
    description: `llo magni totam nemo commodi
       atque ullam est odio optio at inventore.`,
  },
  {
    id: 3,
    name: "Sepatu Baru 3",
    price: "Rp.3.000.000",
    image: "/images/products-1.jpg",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus
       ab in nam, neque ex eaque sed ipsum! Illo m`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          LogOut
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header image={product.image} />
            <CardProducts.Body name={product.name}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price} />
          </CardProducts>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
