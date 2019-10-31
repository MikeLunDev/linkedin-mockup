/* import { encode } from "base-64";
const username = "user4";
const password = process.env.REACT_APP_API_PASS; */

export const headers = new Headers({
  "Content-Type": "application/json",
  credentials: "same-origin"
});

export const LOGIN_PARAMS = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  method: "POST"
};

export const FETCH_PARAMS = {
  method: "GET",
  headers: headers
};

export const POST_PARAMS = {
  method: "POST",
  headers: headers
};

export const DELETE_PARAMS = {
  method: "DELETE",
  headers: headers
};
export const PUT_PARAMS = {
  method: "PUT",
  headers: headers
};

export const FETCH_BASE_URL =
  "https://linkedinbackend.azurewebsites.net/profile";

export const FETCH_POST_URL = "https://linkedinbackend.azurewebsites.net/post";

export const FETCH_USER_URL = "https://linkedinbackend.azurewebsites.net/user/";
