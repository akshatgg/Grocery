import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const RenderedProducts = ({ productType }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [quantities, setQuantities] = useState({});

  const enterProductHandler = (id) => {
    setHoveredProductId(id);
  };

  const leaveProductHandler = () => {
    setHoveredProductId(null);
  };

  const increaseQuantity = (index) => {
    setQuantities((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  const decreaseQuantity = (index) => {
    setQuantities((prev) => ({ ...prev, [index]: Math.max((prev[index] || 0) - 1, 0) }));
  };

  const renderedProducts = productType.target.slice(0, 9).map((item, index) => {
    const title =
      productType.id === 1 ? item.vegetablesDetails.name :
      productType.id === 2 ? item.fruitDetails.fruitName :
      productType.id === 3 ? item.strMeal :
      productType.id === 4 ? item.strDrink : null;

    const img =
      productType.id === 1 ? item.vegetablesDetails.photo_url :
      productType.id === 2 ? item.fruitDetails.photo_url :
      productType.id === 3 ? item.photo_url :
      productType.id === 4 ? item.photo_url : null;

    const price =
      productType.id === 1 ? item.vegetablesDetails.price :
      productType.id === 2 ? item.fruitDetails.price :
      productType.id === 3 ? item.price :
      productType.id === 4 ? item.price : null;

    return (
      <li
        key={index}
        className="relative flex items-center w-full gap-5 overflow-hidden duration-200 bg-white border-2 rounded-lg h-64 hover:border-green-500"
        onMouseEnter={() => enterProductHandler(index)}
        onMouseLeave={leaveProductHandler}
      >
        <img src={img} alt={title} className="w-2/3 h-full" />

        <div className="font-bold">
          <h4 className="mb-2 text-2xl text-main-700 ">{title}</h4>
          <span>${price}</span>
          <div className="flex gap-1 mt-2">
            {[...Array(3)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="text-sm text-yellow-500" />
            ))}
            <FontAwesomeIcon icon={faStar} className="text-sm text-main-100" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FontAwesomeIcon
              icon={faMinus}
              className="text-red-500 cursor-pointer hover:text-red-700"
              onClick={() => decreaseQuantity(index)}
            />
            <span className="text-lg font-semibold">{quantities[index] || 0}</span>
            <FontAwesomeIcon
              icon={faPlus}
              className="text-green-500 cursor-pointer hover:text-green-700"
              onClick={() => increaseQuantity(index)}
            />
          </div>
        </div>

        <div className="absolute flex items-end gap-4 text-xl lg:text-2xl bottom-4 right-4">
          <FontAwesomeIcon
            icon={faBagShopping}
            className={`mt-4 text-green-400 duration-200 cursor-pointer hover:text-green-800 hover:-translate-y-3 ${
              hoveredProductId === index ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-12"
            }`}
          />
          
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-red-400 duration-200 cursor-pointer hover:text-red-800 hover:-translate-y-3 ${
              hoveredProductId === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          />
        </div>
      </li>
    );
  });

  return <ul className="grid gap-2 mt-10 sm:grid-cols-1 md:gap-10 xl:grid-cols-3 md:grid-cols-2">{renderedProducts}</ul>;
};

export default RenderedProducts;
