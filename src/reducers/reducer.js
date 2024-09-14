export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "TOGGLE_THEME":
      return { ...state, isDark: !state.isDark };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "GET_CHAR":
      return {};
  }
};
