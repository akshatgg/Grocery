import { useState } from "react";
import RenderedProducts from "./RenderedProducts";
import { Link } from "react-router-dom";
import ProductsData from './ProductsData';

const AllProducts = () => {
  const [currentKindOfProducts, setCurrentKindOfProducts] = useState(1);

  // Use ProductsData directly
  const kindsOfProducts = ProductsData.map((category) => ({
    id: category.id,
    type: category.id === 1 ? "vegetable" :
          category.id === 2 ? "fruit" :
          category.id === 3 ? "Grain and pulses" :
          category.id === 4 ? "Beverages" : "",
    target: category.target,
  }));

  const chooseTypeOfProductsHandler = (id) => {
    setCurrentKindOfProducts(id);
  };

  const productsTypeClasses =
    "text-base capitalize duration-300 font-bold hover:text-green-700";

  const allKindsOfProducts = (
    <ul className="flex flex-wrap items-center justify-center gap-10">
      {kindsOfProducts.map((item, i) => (
        <li key={i} onClick={() => chooseTypeOfProductsHandler(item.id)}>
          <button
            className={`${productsTypeClasses} ${
              item.id == currentKindOfProducts
                ? "text-green-700"
                : "text-main-100"
            }`}
          >
            {item.type}
          </button>
        </li>
      ))}
      <Link to="/shop" className={`${productsTypeClasses} text-main-100`}>
        view all
      </Link>
    </ul>
  );

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-10 text-3xl font-bold capitalize lg:text-7xl">
            Introducing our products
          </h2>
          {allKindsOfProducts}
        </div>
        <RenderedProducts
          productType={
            kindsOfProducts.filter((obj) => obj.id == currentKindOfProducts)[0]
          }
        />
      </div>
    </section>
  );
};

export default AllProducts;