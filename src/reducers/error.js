export default function(state = null, action) {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        fetchError: true,
        message: action.message,
        statusCode: action.statusCode
      };
    case "RESET_ERROR":
      return {
        ...state,
        fetchError: false,
        message: "",
        statusCode: null
      };
    default:
      return state;
  }
}
