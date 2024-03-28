import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();
  function getPlus(plus) {
    dispatch({ type: "QUANTITY_PLUS", payload: plus });
  }
  function getMinus(plus) {
    dispatch({ type: "QUANTITY_MINUS", payload: plus });
  }
  const totalPrice = basket.reduce((acc, el) => {
    return (acc += el.price * el.quantity);
  }, 0);
  const totalQuantitiy = basket.reduce((acc, el) => {
    return (acc += el.quantity);
  }, 0);
  const del = (data) => {
    dispatch({ type: "DELETE", payload: data.id });
  };
  return (
    <div id="basket">
      <div className="container">
        <div className="basket my-10">
          {!basket.length ? (
            <div
              id="alert-additional-content-4"
              class="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
              role="alert"
            >
              <div class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <h3 class="text-lg font-medium">Ваша корзина пустое!!!</h3>
              </div>
              <div class="mt-2 mb-4 text-sm">
                More info about this info warning goes here. This example text
                is going to run a bit longer so that you can see how spacing
                within an alert works with this kind of content.
              </div>
              <div class="flex">
                <Link
                  to="/product"
                  class="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800"
                >
                  <svg
                    class="me-2 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  View more
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Img
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((el, idx) => (
                    <tr
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      key={el.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <h1>{idx + 1}</h1>
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={el.image} alt="img" width={100} />
                      </th>
                      <td className="px-6 py-4">{el.title}</td>
                      <td className="px-6 py-4">${el.price * el.quantity}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-3xl">
                          <button
                            onClick={() => getMinus(el)}
                            className="text-red-500"
                          >
                            -
                          </button>
                          <h2 className="text-black">{el.quantity}</h2>
                          <button
                            onClick={() => getPlus(el)}
                            className="text-green-500"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => del(el)}
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td className="px-6 py-4 text-2xl"></td>
                    <td className="px-6 py-4 text-2xl">{totalPrice} $</td>
                    <td className="px-6 py-4 text-2xl">{totalQuantitiy}</td>
                    <td className="px-6 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
