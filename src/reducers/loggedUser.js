export default function(state = {}, action) {
  switch (action.type) {
    case "LOAD_LOGGED_USER":
      console.log("im inside logged user", action.payload);
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
