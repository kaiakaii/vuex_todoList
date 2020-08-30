import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: 1,
        content: '吃飯',
        status: false
      },
      {
        id: 2,
        content: '睡觉',
        status: true
      },
      {
        id: 3,
        content: '打豆豆',
        status: false
      }]
  },
  mutations: {
    addTodo: (state, todo) => {
      state.todoList.push(todo)
    },
    updateTodo: (state, actionTodo) => {
      const index = state.todoList.findIndex(todo => todo.id === actionTodo.id)
      if (index !== -1) {
        state.todoList[index].status = !actionTodo.status
      }
      console.log(state.todoList);
    },
    deleteTodo: (state, id) => {
      const index = state.todoList.findIndex(x => x.id === id)
      if (index !== -1) {
        state.todoList.splice(index, 1)
      }
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
