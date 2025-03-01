import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import ShopPagination from "../ShopPagination";
import { useEffect, useState } from "react";

const DrinksShop = () => {
  const [paginationIndices, setPaginationIndices] = useState({
    start: 0,
    end: 10,
  });

  const [filteredDrinks, setFilteredDrinks] = useState([]);

  // Get (drinks) from Redux store.
  const drinks = [];
  const storedDrinks = useSelector((state) => state.drinks);
  storedDrinks.allDrinks.forEach((e) =>
    e.drinks.forEach((ele) => drinks.push(ele))
  );

  const drinksError = useSelector((state) => state.errors.allErrors).filter(
    (item) => item.errorType == "drinks"
  )[0];

  // Obtain filters, if any.
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    // Render all filtered drinks:
    const filteredProducts = drinks.filter((item) => {
      // Filter based on letters
      const firstLetterMatches =
        filters.letters.length !== 0 &&
        filters.letters.includes(item.name.trim().toLowerCase().charAt(0));

      // Filter based on area
      const areaMatches =
        filters.areas.length !== 0 && filters.areas.includes(item.strArea);

      // Filter based on category
      const categoryMatches =
        filters.categories.length !== 0 &&
        filters.categories.includes(item.strCategory);

      // Return true if any of the filters match
      return firstLetterMatches || areaMatches || categoryMatches;
    });

    // Apply the price range filter if it's not the default range
    if (filters.priceRange.min !== 0 || filters.priceRange.max !== 200) {
      const currentFilteredProducts = filteredProducts.length
        ? filteredProducts
        : drinks;
      const priceFilteredProducts = currentFilteredProducts.filter((item) => {
        const priceMatches =
          filters.priceRange.min <= item.price &&
          item.price <= filters.priceRange.max;
        return priceMatches;
      });
      setFilteredDrinks(priceFilteredProducts);
    } else {
      setFilteredDrinks(filteredProducts);
    }
  }, [filters]);

  const correctDrinks = filteredDrinks.length != 0 ? filteredDrinks : drinks;

  // Render all drinks:
  const renderedDrinks = (
    <ul className="flex flex-wrap items-center justify-center gap-6">
      {correctDrinks
        .slice(paginationIndices.start, paginationIndices.end)
        .map((drink, index) => {
          const drinkName =
            drink.name.length > 20
              ? drink.name.slice(0, 20) + "..."
              : drink.name;

          return (
            <li
              key={index}
              className="relative w-[300px] h-fit border-2 rounded-lg duration-200 hover:border-2 hover:border-primary-500"
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.name}
                className="w-full rounded-t-lg h-2/3"
              />
              <div className="flex justify-between gap-2 px-2 py-2">
                <div>
                  <div>
                    <h3 className="mb-4 text-lg font-bold">{drinkName}</h3>
                    <h4 className="text-base text-orange-600">
                      {drink.strCategory}
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="font-bold text-green-800">
                    ${drink.price}
                  </span>
                  <button className="px-4 py-2 text-2xl text-white duration-100 bg-green-500 rounded-full hover:font-bold hover:rounded-y-none hover:rounded-r-none hover:text-black">
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );

  const getCurrentPageHandler = (cur, productsPerPage) => {
    // Calc the first and last product index that should be rendered.
    const startIndex = (cur - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    setPaginationIndices({ start: startIndex, end: endIndex });
  };

  return (
    <section>
      <div>
        {drinksError && (
          <p className="text-xl font-bold text-center text-red-600">
            {drinksError.errorMessage}
          </p>
        )}

        {drinks.length == 0 && !drinksError && (
          <p className="flex items-center justify-center gap-4 text-xl font-bold text-green-600">
            <FontAwesomeIcon icon={faSpinner} spinPulse /> Loading Drinks...
          </p>
        )}

        {drinks.length != 0 && !drinksError && (
          <div>
            <p className="mb-4 text-base italic font-bold text-main-700">
              Available drinks &lt;
              <span className="text-xl text-orange-600">
                {" "}
                {filteredDrinks.length != 0
                  ? filteredDrinks.length
                  : drinks.length}{" "}
              </span>
              &gt;
            </p>
          </div>
        )}
      </div>

      {renderedDrinks}

      {!drinks.length == 0 && !drinksError && (
        <ShopPagination
          products={correctDrinks}
          getCurrentPage={getCurrentPageHandler}
          paginationIndices={paginationIndices}
        />
      )}
    </section>
  );
};

export default DrinksShop;
