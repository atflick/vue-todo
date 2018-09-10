<template>
  <div class="todo-list">
    <div class="todo-list-header">
      <div class="todo-list-header-title -col-name">Name</div>
      <div class="todo-list-header-title -col-project">Project</div>
      <div class="todo-list-header-title -col-status">Status</div>
    </div>
    <list v-bind:todos="todos" v-on:complete-todo="completeTodo" v-on:reopen-todo="reopenTodo"></list>

    <div class="todo-list-header -incomplete">
      <h4>Incomplete: {{count}}</h4>
    </div>

    <div class="todo-list-add-component">
      <label>Name
        <input type="text" v-model="newTodo.name">
      </label>
      <label>Project
        <input type="text" v-model="newTodo.project">
      </label>
      <div class="button -add" @click="$emit('add-todo', newTodo )">Add Todo</div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'
  export default {
    props: ['todos'],
    components: {
      List
    },
    data() {
      return {
        newTodo: {
          name: '',
          project: ''
        }
      }
    },
    computed: {
      count() {
       let unfinished = this.todos.filter((item) => {
         return item.done == false
       })
       return unfinished.length
      }
    },
    methods: {
      completeTodo(id) {
        this.todos[id]['done'] = true
      },
      reopenTodo(id) {
        this.todos[id]['done'] = false
      }
    }
  }
</script>

<style lang="scss" scoped>

  .todo-list {
    width: 90%;
    margin: 0 auto;
    max-width: 900px;
    border: 1px solid #444;
    border-radius: 3px;
    overflow: hidden;
    &-header {
      display: flex;
      margin: 0 -15px;
      padding: 0 30px;
      border-bottom: 1px solid #444;

      &.-incomplete {
        justify-content: flex-end;
        h4 {
          padding:10px 15px;
        }
      }

      &-title {
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 0;
        margin: 0 15px;
        &.-col-name {
          width: calc(40% - 20px);
        }
        &.-col-project {
          width: calc(40% - 20px);
        }
        &.-col-status {
          width: calc(20% - 20px);
        }
      }
    }
    &-add-component {
      padding: 10px 30px;
      display: flex;

      .button {
        flex-grow: 0 1 30%;
      }
      label {
        margin-right: 20px;
      }
      input {
        padding: 5px;
      }
    }
  }
</style>
