<template>
  <div>
    <input type="text" v-model="todoMessage" placeholder="请输入你要做的事" />
    <button @click="addTodo">添加</button>
    <TodoList :todoList="todoList" />
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
export default {
  name: "FromTodoList",
  data() {
    return {
      todoList: this.$store.state.todoList,
      todoMessage: ""
    };
  },
  methods: {
    addTodo() {
      console.log("asdas");
      this.$store.commit("addTodo", {id:'4',content:this.todoMessage,status:false});
    }
  },
  components: {
    TodoList
  }
};
</script>

<style scoped>
</style>>
