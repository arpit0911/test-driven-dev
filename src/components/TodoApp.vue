<template>
  <div>
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="todo.completed ? 'completed' : 'not-completed'"
    >
      <h2>{{ todo.text }}</h2>
      <input
        type="checkbox"
        data-test="todo-checkbox"
        v-model="todo.completed"
        class="checkbox-style"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Test driven development",
          completed: false,
        },
      ],
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
  },
};
</script>

<style>
.not-completed {
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.completed {
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox-style {
  margin: 10px;
  padding: 10px;
  width: 20px;
  height: 30px;
}
</style>
