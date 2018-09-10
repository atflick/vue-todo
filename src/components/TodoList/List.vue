<template>
  <div class="todo-list-container">
    <div class="todo-list-item" v-for="todo in todos" :key="todo.id">
      <div class="todo-list-item-detail -col-name" :class="{'-striked': todo.done }">{{todo.title}}</div>
      <div class="todo-list-item-detail -col-project" :class="{'-striked': todo.done }">{{todo.project}}</div>
      <div class="todo-list-item-detail -col-status">
        <div class="button -complete" v-show="!todo.done" @click="$emit('complete-todo', todo.id)">Close</div>
        <div class="button -reopen" v-show="todo.done" @click="$emit('reopen-todo', todo.id)">Reopen</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todos'],
  }
</script>

<style lang="scss" scoped>

  .todo-list {
    &-container {
      padding: 0 30px;
      border-bottom: 1px solid #444;
    }
    &-item {
      display: flex;
      margin: 0 -15px;
      &-detail {
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
        &.-striked {
          text-decoration: line-through;
        }
      }
    }
  }
</style>
