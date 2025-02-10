import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const RenderedProducts = ({ productType }) => {
  const [cartItems, setCartItems] = useState({});
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartData")) || {};
    setCartItems(storedData);
    console.log(storedData);
  }, []);

  const updateLocalStorage = (newData) => {
    localStorage.setItem("cartData", JSON.stringify(newData));
  };

  const increaseQuantity = (product) => {
    const { uid, name, price, category, img } = product;
    setCartItems((prev) => {
      const currentItem = prev[uid] || { uid, name, price, category, img, quantity: 0 };
      const updatedItem = { ...currentItem, quantity: currentItem.quantity + 1 };
      const newCartItems = { ...prev, [uid]: updatedItem };
      updateLocalStorage(newCartItems);
      return newCartItems;
    });
  };

  const decreaseQuantity = (uid) => {
    setCartItems((prev) => {
      const currentItem = prev[uid];
      if (!currentItem) return prev;

      const newQuantity = currentItem.quantity - 1;
      if (newQuantity <= 0) {
        const newCartItems = { ...prev };
        delete newCartItems[uid];
        updateLocalStorage(newCartItems);
        return newCartItems;
      }

      const updatedItem = { ...currentItem, quantity: newQuantity };
      const newCartItems = { ...prev, [uid]: updatedItem };
      updateLocalStorage(newCartItems);
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartData");
  };

  const enterProductHandler = (uid) => setHoveredProductId(uid);
  const leaveProductHandler = () => setHoveredProductId(null);

  const renderedProducts = productType.target.slice(0, 9).map((item) => {
    const title =
      productType.id === 1 ? item.vegetablesDetails.name :
      productType.id === 2 ? item.fruitDetails.fruitName :
      productType.id === 3 ? item.strMeal :
      productType.id === 4 ? item.strDrink : item.name;

    const img =
      productType.id === 1 ? item.vegetablesDetails.photo_url :
      productType.id === 2 ? item.fruitDetails.photo_url :
      productType.id === 3 ? item.photo_url :
      productType.id === 4 ? item.photo_url : item.photo_url;

    const price =
      productType.id === 1 ? item.vegetablesDetails.price :
      productType.id === 2 ? item.fruitDetails.price :
      productType.id === 3 ? item.price :
      productType.id === 4 ? item.price : item.price;

    return (
      <li
        key={item.uid}
        className="relative flex items-center w-full gap-5 overflow-hidden duration-200 bg-white border-2 rounded-lg h-64 hover:border-green-500"
        onMouseEnter={() => enterProductHandler(item.uid)}
        onMouseLeave={leaveProductHandler}
      >
        <img src={img} alt={title} className="w-2/3 h-full" />

        <div className="font-bold">
          <h4 className="mb-2 text-2xl text-main-700">{title}</h4>
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
              onClick={() => decreaseQuantity(item.uid)}
            />
            <span className="text-lg font-semibold">
              {cartItems[item.uid]?.quantity || 0}
            </span>
            <FontAwesomeIcon
              icon={faPlus}
              className="text-green-500 cursor-pointer hover:text-green-700"
              onClick={() => increaseQuantity({
                uid: item.uid,
                name: title,
                price: price,
                category: productType.Category,
                img: img, // Include the image URL here
              })}
            />
          </div>
        </div>

        <div className="absolute flex items-end gap-4 text-xl lg:text-2xl bottom-4 right-4">
          <FontAwesomeIcon
            icon={faBagShopping}
            className={`mt-4 text-green-400 duration-200 cursor-pointer hover:text-green-800 hover:-translate-y-3 ${
              hoveredProductId === item.uid ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-12"
            }`}
            onClick={() => increaseQuantity({
              uid: item.uid,
              name: title,
              price: price,
              category: productType.Category,
              img: img, // Include the image URL here
            })}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-red-400 duration-200 cursor-pointer hover:text-red-800 hover:-translate-y-3 ${
              hoveredProductId === item.uid ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          />
        </div>
      </li>
    );
  });

  return (
    <div>
      <button
        onClick={clearCart}
        className="px-4 py-2 mb-4 text-white bg-red-500 rounded hover:bg-red-700"
      >
        Clear Cart
      </button>
      <ul className="grid gap-2 mt-10 sm:grid-cols-1 md:gap-10 xl:grid-cols-3 md:grid-cols-2">
        {renderedProducts}
      </ul>
    </div>
  );
};

export default RenderedProducts;