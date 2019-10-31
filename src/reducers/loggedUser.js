export default function(state = "", action) {
  switch (action.type) {
    case "LOAD_LOGGED_USER":
      return action.payload;
    default:
      return state;
  }
}
