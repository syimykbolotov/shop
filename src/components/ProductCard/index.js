import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { basket, favorite } = useSelector((q) => q);
  const dispatch = useDispatch();
  let bas = basket.some((some) => some.id === el.id);
  let fav = favorite.some((some) => some.id === el.id);
  const addToBasket = (data) => {
    dispatch({ type: "ADD_BASKET", payload: data });
  };
  const addToFavorite = (data) => {
    dispatch({ type: "ADD_FAVORITE", payload: data });
  };
  const favDel = (data) => {
    dispatch({ type: "FAV_DEL", payload: data.id });
  };
  return (
    <div id="productCard">
      <div className="container">
        <div className="productCard">
          <div
            key={el.id}
            className="max-w-sm bg-white border w-[220px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/product/${el.id}`}>
              <img
                className="rounded-t-lg"
                src={el.image}
                alt="img"
                width={220}
              />
            </Link>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {el.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {el.description}
              </p>
              <h3 className="my-3">${el.price}</h3>
              <div className="flex flex-col items-center gap-4">
                {!bas ? (
                  <a
                    onClick={(e) => addToBasket(el)}
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add To Basket
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link to="/basket" className="">
                    <button
                      type="button"
                      className="text-gray-900 mx-auto bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                    >
                      Go To Basket
                    </button>
                  </Link>
                )}
                {!fav ? (
                  <button
                    onClick={() => addToFavorite(el)}
                    type="button"
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <FaHeart />
                  </button>
                ) : (
                  <button
                    onClick={() => favDel(el)}
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <FaHeart />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
