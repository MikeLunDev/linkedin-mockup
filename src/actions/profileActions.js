import {
  FETCH_BASE_URL,
  FETCH_PARAMS,
  FETCH_USER_URL,
  LOGIN_PARAMS
} from "./fetchParameters";

export const handleGetProfile = () => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_BASE_URL, FETCH_PARAMS);
    const json = await response.json();
    return response.ok
      ? dispatch({
          type: "LOAD_PROFILES",
          payload: json
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};

export const handleSelectedProfile = (user = "user4") => {
  return async (dispatch, getState) => {
    var response = await fetch(FETCH_BASE_URL + user, FETCH_PARAMS);
    const json = await response.json();
    return response.ok
      ? dispatch({
          type: "LOAD_SELECTED_PROFILE",
          payload: json
        })
      : dispatch({
          type: "ERROR",
          message: json.message,
          statusCode: ` ${response.status} ${response.statusText}`
        });
  };
};
export const handleGetLoggedUser = credentials => {
  return async (dispatch, getState) => {
    const { email, password, rememberMe } = credentials;
    const response = await fetch(FETCH_USER_URL + "login", {
      ...LOGIN_PARAMS,
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.ok) {
      const json = await response.json();
      const { token } = json;
      return dispatch({
        type: "LOAD_LOGGED_USER",
        payload: token,
        rememberMe: rememberMe
      });
    } else {
      return dispatch({
        type: "ERROR",
        message: response.statusText,
        statusCode: response.status
      });
    }
  };
};

export const handleRefreshToken = async token => {
  return async (dispatch, getState) => {
    var resp = await fetch(FETCH_USER_URL + "refresh", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token
      }
    });
    if (resp.ok) {
      var json = await resp.json();
      const { token } = json;
      return dispatch({
        type: "LOAD_LOGGED_USER",
        payload: token,
        rememberMe: false
      });
    } else {
      return dispatch({
        type: "ERROR",
        message: resp.statusText,
        statusCode: resp.status
      });
    }
  };
};
