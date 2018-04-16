<template>
  <div>
    <input
      id="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model="content"
      type='text'
      @keyup.enter="onKeyup()"
    >
  </div>
</template>

<script>
export default {
  name: 'addTodo',
  data () {
    return {
      id: 0,
      content: ''
    };
  },
  methods: {
    onKeyup() {
      const id = String(+new Date());
      const content = this.content.trim();
      if (content) {
        this.$emit('create-todo', {
          id,
          content,
          completed: false,
          editing: false
        });
        this.content = '';
      }
    }
  }
};
</script>
