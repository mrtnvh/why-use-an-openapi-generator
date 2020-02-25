<script lang="ts">
import TodoApi from './Todos';

export default {
  data() {
    return {
      todos: () => []
    };
  },
  async mounted() {
    const todoAPi = new TodoApi();
    const { data } = await todoAPi.get();
    this.todos = data;
  }
};
</script>