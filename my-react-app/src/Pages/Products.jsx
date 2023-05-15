import { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/products-1.jpg",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus
       ab in nam, neque ex eaque sed ipsum! Illo magni totam nemo commodi
       atque ullam est odio optio at inventore.`,
  },
  {
    id: 2,
    name: "Sepatu Baru 2",
    price: 2000000,
    image: "/images/products-1.jpg",
    description: `llo magni totam nemo commodi
       atque ullam est odio optio at inventore.`,
  },
  {
    id: 3,
    name: "Sepatu Baru 3",
    price: 3000000,
    image: "/images/products-1.jpg",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus
       ab in nam, neque ex eaque sed ipsum! Illo m`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); // seperti component didmount

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]); // seperti component didUpdate

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
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
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} />
              <CardProducts.Body name={product.name}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProducts>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left border-separate border-spacing-x-5 table-auto">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="mt-5 mb-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
