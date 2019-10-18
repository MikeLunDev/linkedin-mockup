export default function(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state];
    case "LOAD_ALL_POST":
      return [...action.payload, ...state];
    case "DELETE_POST":
      const indexToRemove = state.findIndex(
        current => current._id === action.payload
      );
      console.log(indexToRemove);
      return indexToRemove !== -1
        ? [...state.slice(0, indexToRemove), ...state.slice(indexToRemove)]
        : state;

    default:
      return state;
  }
}
