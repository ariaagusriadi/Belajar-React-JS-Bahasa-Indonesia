import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/button";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useLogin();

  // get api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header id={product.id} image={product.image} />
                <CardProducts.Body name={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer price={product.price} id={product.id} />
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>

      {/* <div className="mt-5 mb-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
