const initialState = {
  products: [],
  basket: [],
  favorite: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_BASKET":
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
        // return {
        //   ...state,
        //   basket: state.basket.map((el) =>
        //     el.id === action.payload.id
        //       ? { ...el, quantity: el.quantity + 1 }
        //       : el
        //   ),
        // };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
        };
      }
    case "DELETE":
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.payload),
      };
    case "QUANTITY_PLUS":
      let a = state.basket.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      return {
        ...state,
        basket: a,
      };
    case "QUANTITY_MINUS":
      let b = state.basket.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : el.quantity }
          : el
      );
      return {
        ...state,
        basket: b,
      };
    case "ADD_FAVORITE":
      let findFav = state.favorite.find((el) => el.id === action.payload.id);
      if (findFav) {
      } else {
        return {
          ...state,
          favorite: [...state.favorite, action.payload],
        };
      }
    case "FAV_DEL":
      return {
        ...state,
        favorite: state.favorite.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
