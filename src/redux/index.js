const defaultState = {
  quotes: [],
  weather: []
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        weather: [action.input]
      };
    default:
      return state;
  }
};

export default reducer;
