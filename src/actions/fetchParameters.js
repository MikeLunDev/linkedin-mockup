import { encode } from "base-64";
require("dotenv").config();
const username = "user4";
const password = process.env.REACT_APP_API_PASS;

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: "Basic " + encode(username + ":" + password),
  credentials: "same-origin"
});

export const FETCH_PARAMS = {
  method: "GET",
  headers: headers
};

export const FETCH_EXPERIENCE_URL =
  "https://striveschool.herokuapp.com/api/profiles/user4/experiences";

export const FETCH_PROFILE_URL =
  "https://striveschool.herokuapp.com/api/profiles/me";
