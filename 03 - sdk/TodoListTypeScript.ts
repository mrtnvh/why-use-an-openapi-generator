import Vue from "vue";
import { PetsApiFactory } from "petstore-sdk-ts";

export default Vue.component('TodoListTypeScript', {
  data() {
    return {
      todos: () => []
    };
  },
  async mounted() {
    const { data } = await PetsApiFactory().listPets();
    this.todos = data;
  }
});
