import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ProductDetails = ({ el }) => {
  const { products, basket, favorite } = useSelector((s) => s);
  const { proId } = useParams();
  const dispatch = useDispatch();
  let bas = basket.some((some) => some.id === products.id);
  let fav = favorite.some((some) => some.id === products.id);
  let findDet = products.find((el) => el.id === +proId);
  let { image, title, rating, price, description, countInStock } = findDet;
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
    <div id="productDetails">
      <div className="container">
        <div className="productDetails my-10">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="ml-5 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={image}
              alt="img"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Цена: ${price}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Рейтинг: {rating}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Информация: {description}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Количество: {countInStock}
              </p>
              <div className="flex flex-col items-center gap-4">
                {!bas ? (
                  <a
                    onClick={() => addToBasket(findDet)}
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
                    onClick={() => addToFavorite(findDet)}
                    type="button"
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <FaHeart />
                  </button>
                ) : (
                  <button
                    onClick={() => favDel(findDet)}
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <FaHeart />
                  </button>
                )}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
