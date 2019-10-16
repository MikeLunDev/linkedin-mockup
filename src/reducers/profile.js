export default function(state = {}, action) {
  switch (action.type) {
    case "LOAD_PROFILE":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
