<template>
  <div>
    <section id="todoapp">
      <header id="header">
        <h1>todos</h1>
        <input id="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="onKeyup" />
      </header>
      <section id="main">
        <input id="toggle-all" type="checkbox" :checked="toggleAllChecked" @click.prevent="toggleAll" />
        <label for="toggle-all">Mark all as complete</label>
        <ul id="todo-list">
          <li v-for="item in currentList" :data-id="item.id" :class="[{editing: item.editing, completed: item.completed}]" @dblclick.prevent="editing">
            <div class="view">
              <input :data-id="item.id" class="toggle" type="checkbox" :checked="item.completed" @click.prevent="onItemClick" />
              <label>{{item.content}}</label>
              <button :data-id="item.id" class="destroy" @click.prevent="destroy" />
            </div>
            <input :data-id="item.id" class="edit" :value="item.content" @keyup.enter="handleItemContent" @focusout="handleItemContent" />
          </li>
        </ul>
      </section>
      <footer id="footer">
        <span id="todo-count">
            <strong>{{getActive.length}}</strong> {{getActive.length === 1 ? 'item' : 'items'}} left
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
        <button id="clear-completed" @click.prevent="clearCompleted">
            {{`Clear completed (${getCompleted.length})`}}
          </button>
      </footer>
    </section>
    <footer id="info">
      <p>Double-click to edit a todo</p>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  
  @Component({
    name: 'app',
    props: {
      toggleAllChecked: Boolean
    }
  })
  export default class App extends Vue {
    toggleAllChecked = false;
    get type(): string {
      return this.getHashState();
    }
    get getAll(): Todo.Item[] {
      return this.$store.getters.getAll;
    }
    get getActive(): Todo.Item[] {
      return this.$store.getters.getActive;
    }
    get getCompleted(): Todo.Item[] {
      return this.$store.getters.getCompleted;
    }
    get currentList(): Todo.Item[] {
      switch (this.type) {
        case 'all':
          return this.getAll;
        case 'completed':
          return this.getCompleted;
        case 'active':
          return this.getActive;
      }
      return [];
    }
    selectedClass(name: string) {
      return {
        selected: this.getHashState() === name
      };
    }
    getHashState(): string {
      return location.hash.replace('#/', '') || 'all';
    }
    onKeyup(e: any) {
      var value = e.target.value.trim();
      if (value) {
        this.$store.commit('add', {
          content: value
        });
        e.target.value = '';
      }
    }
    onItemClick(e: any) {
      const id = e.target.getAttribute('data-id');
      this.$store.commit(e.target.checked ? 'complete' : 'uncomplete', {
        id
      });
    }
    handleItemContent(e: any) {
      const id = e.target.getAttribute('data-id');
      const value = e.target.value.trim();
      if (value) {
        this.$store.commit('update', {
          content: value,
          id
        });
      }
      this.$store.commit('toggleEditing', {
        id
      });
    }
    editing(e: any) {
      const id = e.currentTarget.getAttribute('data-id');
      this.$store.commit('toggleEditing', {
        id
      });
      const target = e.currentTarget.querySelector('input.edit');
      setTimeout(() => target.focus(), 0);
    }
    destroy(e: any) {
      const id = e.target.getAttribute('data-id');
      this.$store.commit('remove', {
        id
      });
    }
    toggleAll(e: any) {
      this.$store.commit(e.target.checked ? 'completedAll' : 'uncompletedAll');
      this.toggleAllChecked = !this.toggleAllChecked;
    }
    clearCompleted() {
      this.$store.commit('clearCompleted');
    }
  }
</script>

<style lang="less">
  @import '../assets/base.less';
  @import '../assets/app.less';
</style>
