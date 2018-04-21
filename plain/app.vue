<template>
  <div>
    <section id="todoapp">
      <header id="header">
        <h1>todos</h1>
        <add-todo v-on:create-todo="onCreate"></add-todo>
      </header>
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          :checked="toggleAllChecked"
          @click.prevent="toggleAll"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
          <li
            v-for="item in data"
            :data-id="item.id"
            :class="[{completed: item.completed, editing: item.editing}]"
           >
            <todo
              :item="item"
              v-on:oneEditingComplete="onEditingComplete"
              v-on:onEditing="onEditing"
              v-on:onDelete="onDelete"
              v-on:onComplete="onComplete"/>
          </li>
        </ul>
      </section>
      <footer id="footer">
        <span id="todo-count">
        <strong>{{ data.length }}</strong> {{ data.length == 1 ? 'item' : 'items'}} left
        </span>
        <ul id="filters">
          <li>
            <a :class="selectedClass('all')" href="#/">All</a>
          </li>
          <li>
            <a :class="selectedClass('active')" href="#/active">Active</a>
          </li>
          <li>
            <a :class="selectedClass('completed')" href="#/completed">Completed</a>
          </li>
        </ul>
          <button
            id="clear-completed"
            @click.prevent="clearCompleted">
            {{`Clear completed (${getCompleted.length})`}}
          </button>
      </footer>
    </section>
  </div>
</template>

<script>
import addTodo from './components/addTodo';
import todo from './components/todo';

const localStore = {
  get() {
    return JSON.parse(window.localStorage['enough-todo'] || '[]');
  },
  set(data) {
    window.localStorage['enough-todo'] = JSON.stringify(data);
  }
};

export default {
  name: 'app',
  components: {
    addTodo,
    todo
  },
  mounted() {
    this.state = this.getHashState();
    window.onhashchange = () => {
      this.state = this.getHashState();
    };
  },
  computed: {
    data () {
      switch (this.state) {
        case 'all':
          return this.getTodos(todo => {
            todo.editing = false;
            return todo;
          });
        case 'active':
          return this.getTodos(todo => !todo.completed);
        case 'completed':
          return this.getTodos(todo => todo.completed);
      }
    },
    getCompleted () {
      return this.getTodos(todo => todo.completed);
    }
  },
  data() {
    return {
      todos: localStore.get(),
      state: 'all',
      toggleAllChecked: false
    };
  },
  methods: {
    getTodos(func) {
      return this.todos.filter(func).reverse();
    },
    selectedClass(name) {
      return {
        selected: this.getHashState() === name
      };
    },
    getHashState() {
      return location.hash.replace('#/', '') || 'all';
    },
    onCreate(todo) {
      this.todos.push(todo);
      localStore.set(this.todos);
    },
    onDelete(todo) {
      this.todos = this.todos.filter(item => item.id !== todo.id);
      localStore.set(this.todos);
    },
    onComplete(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].completed = todo.completed;
      localStore.set(this.todos);
    },
    onEditing(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].editing = todo.editing;
    },
    onEditingComplete(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].content = todo.content;
      localStore.set(this.todos);
    },
    toggleAll(e) {
      this.todos.forEach(todo => {
        todo.completed = e.target.checked;
      });
      this.toggleAllChecked = !this.toggleAllChecked;
      localStore.set(this.todos);
    },
    clearCompleted() {
      this.todos = this.getTodos(item => !item.completed);
      localStore.set(this.todos);
    }
  }
};
</script>
<style lang="less">
  @import '../assets/base.less';
  @import '../assets/app.less';
</style>
