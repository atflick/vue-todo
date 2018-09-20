<template>
  <div>
    <todo-list v-bind:todos="todos" v-on:add-todo="addTodo"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList/TodoList.vue'

  module.exports = {
    name: 'TodoApp',

    components: {
      TodoList
    },

    data() {
      return {
        todos: [
          {
            title: "Make the bread",
            project: "Eating Bread",
            done: false,
            id: 0
          },
          {
            title: "Breaking bread",
            project: "Eating bread",
            done: false,
            id: 1
          },
          {
            title: "Eating the bread",
            project: "eating bread",
            done: false,
            id: 2
          },
        ]

      }
    },

    methods: {
      addTodo(newTodo) {
        const todo = {
          title: newTodo.name,
          project: newTodo.project,
          done: false,
          id: this.todos.length
        }
        this.todos.push(todo);
      },
    }
  }
</script>

<style lang="scss">
  @import './src/assets/scss/main.scss';

  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: monospace;
  }
</style>
