import axios from "axios";
import { API_URL } from "../constants";

export function requestGetProducts() {
  return axios.request({
    method: "get",
    url: API_URL
  });
}
