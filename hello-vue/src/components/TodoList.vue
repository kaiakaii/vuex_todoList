<template>
  <div>
    <ul>
      <Todo v-for="todo in todoList" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import Todo from "../components/Todo";
export default {
  name: "TodoList",
  props: ["todoList"],
  data() {
    return {};
  },
  components: {
    Todo
  }
};
</script>

<style>
</style>