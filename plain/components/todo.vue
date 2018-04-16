<template>
  <div>
    <div class="view" @dblclick.prevent="editing">
      <input
        class="toggle"
        type="checkbox"
        :checked="item.completed"
        @click.prevent="onItemClick"
      />
      <label>{{item.content}}</label>
      <button
        class="destroy"
        @click="destroy(item)"
       />
    </div>
    <input
      class="edit"
      :value="item.content"
      @keyup.enter="handleItemContent"
      @focusout="handleItemContent"
      >
  </div>
</template>

<script>
export default {
  name: 'todo',
  props: ['item'],
  methods: {
    destroy(item) {
      this.$emit('onDelete', item);
    },
    onItemClick(e) {
      this.item.completed = e.target.checked;
      this.$emit('onComplete', this.item);
    },
    editing() {
      this.item.editing = true;
      this.$emit('onEditing', this.item);
    },
    handleItemContent(e) {
      this.item.content = e.target.value;
      this.item.editing = false;
      this.$emit('oneEditingComplete', this.item);
    }
  }
}
</script>
