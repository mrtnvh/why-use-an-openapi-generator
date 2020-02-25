import BaseApi from "./Base";

export default class TodoApi extends BaseApi {
  get() {
    return this.request().get("/todo");
  }
}
