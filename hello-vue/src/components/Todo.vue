<template>
  <div>
    <li :style="{'textDecoration': (todo.status ? 'line-through':'none'),'display':'inline'}" @click="updateTodo">
      {{todo.content}}
    </li>
    <span @click="deleteTodo">X</span>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    updateTodo() {
      console.log("update");
      this.$store.commit("updateTodo", this.todo);
    },
    deleteTodo() {
      console.log("del");
      this.$store.commit("deleteTodo", this.todo.id);
    }
  }
};
</script>

<style>
</style>