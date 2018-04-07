declare namespace Todo {
  export interface Item {
    id: String,
    editing: Boolean,
    completed: Boolean,
    content: String
  }
  export interface State {
    todos: Item[]
  }
}
