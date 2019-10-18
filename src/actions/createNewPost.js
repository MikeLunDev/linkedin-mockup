import { FETCH_POST_URL, POST_PARAMS, DELETE_PARAMS } from "./fetchParameters";

export const handlePostComment = (text = "") => {
  return async (dispatch, getState) => {
    if (text.length > 3) {
      const toSend = Object.assign({}, { text: text });
      const response = await fetch(FETCH_POST_URL, {
        ...POST_PARAMS,
        body: JSON.stringify(toSend)
      });
      var json = await response.json();
      return response.ok
        ? dispatch({
            type: "ADD_POST",
            payload: json
          })
        : dispatch({
            type: "ERROR",
            message: json.message,
            statusCode: ` ${response.status} ${response.statusText}`
          });
    } else return;
  };
};

export const handleDeleteComment = id => {
  return async (dispatch, getState) => {
    console.log("i'm inside handleDelete and i've received", id);
    const response = await fetch(FETCH_POST_URL + id, DELETE_PARAMS);
    return response.ok
      ? dispatch({
          type: "DELETE_POST",
          payload: id
        })
      : dispatch({
          type: "ERROR",
          message: "Cannot Delete",
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
