import axios from "axios";

export default class BaseApi {
	baseUrl = "https://jsonplaceholder.typicode.com" 

  request() {
    return axios.create({
      baseURL: this.baseUrl
    });
  }
}
