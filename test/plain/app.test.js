import { mount } from '@vue/test-utils';
import expect from 'expect';
import App from '../../plain/app.vue';

//TODO: isolate this on testing
window.localStorage = {};

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App);
    wrapper.setData({ todos: [], state: 'all'});
  });

  it('can add todo', () => {
    addTodo('new todo');

    expect(todoList()).toContain('new todo');
  });

  it('can edit todo', () => {
    addTodo('new todo');

    wrapper.find('ul > li:first-child .view').trigger('dblclick');

    const todo = wrapper.find('ul > li:first-child');

    expect(todo.attributes().class).toBe('editing');
  });

  it('can toggle todo', () => {
    addTodo('new todo');

    wrapper.find('ul > li:first-child .toggle').trigger('click');

    const todo = wrapper.find('ul > li:first-child');

    expect(todo.attributes().class).toBe('completed');
  });

  it('can delete todo', () => {
    addTodo('new todo');
    addTodo('other todo');

    wrapper.find('ul > li:first-child .destroy').trigger('click');

    expect(todoList()).not.toContain('other todo');
    expect(todoList()).toContain('new todo');
  });

  it('can filter active todos', () => {
    wrapper.setData({state: 'active'});

    addTodo('eat');
    addTodo('sleep');
    addTodo('play');

    wrapper.find('ul > li:first-child .toggle').trigger('click');

    expect(todoList()).not.toContain('play');
  });

  it('can filter completed todos', () => {
    wrapper.setData({
      todos: [
        {id: 1, content: 'eat', completed: false},
        {id: 2, content: 'play', completed: false},
        {id: 3, content: 'sleep', completed: true}
      ],
      state: 'completed'
    });

    expect(todoList()).toContain('sleep');
  });

  it('display remaining todos', () => {
    addTodo('eat');
    addTodo('sleep');
    addTodo('play');

    const count = wrapper.find('#todo-count').text();

    expect(count).toBe('3 items left');
  });

  it('can clear completed todos', () => {
    wrapper.setData({
      todos: [
        {id: 1, content: 'eat'},
        {id: 2, content: 'play'},
        {id: 3, content: 'sleep'}
      ],
    });

    wrapper.find('ul > li:first-child .toggle').trigger('click');

    wrapper.find('#clear-completed').trigger('click');

    expect(todoList()).not.toContain('eat');
  });

  it('toggle all', () => {
    addTodo('eat');
    addTodo('sleep');
    addTodo('play');

    wrapper.find('#toggle-all').trigger('click');

    const eat = wrapper.find('ul li:nth-child(1) .toggle').element.value;
    const sleep = wrapper.find('ul li:nth-child(2) .toggle').element.value;
    const play = wrapper.find('ul li:nth-child(3) .toggle').element.value;

    expect(eat).toBe('on');
    expect(sleep).toBe('on');
    expect(play).toBe('on');
  });

  function addTodo(body) {
    let newTodo = wrapper.find('#new-todo');

    newTodo.element.value = body;
    newTodo.trigger('input');

    newTodo.trigger('keyup.enter');
  }

  function todoList() {
    return wrapper.find('ul').text();
  }
});
