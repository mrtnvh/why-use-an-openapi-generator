<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: () => []
    };
  },
  async mounted() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    this.todos = data;
  }
};
</script>