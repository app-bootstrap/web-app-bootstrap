import { mount } from '@vue/test-utils';
import expect from 'expect';
import AddTodo from '../../../plain/components/addTodo.vue';

describe('AddTodo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AddTodo);
  });

  it('emit add new todo when value is present', () => {
    const newTodo = wrapper.find('#new-todo');

    newTodo.element.value = 'new todo';
    newTodo.trigger('input');

    newTodo.trigger('keyup.enter');

    const {
      id,
      content,
      completed, editing
    } = wrapper.emitted('create-todo')[0][0];

    expect(id).toBeTruthy();
    expect(content).toBe('new todo');
    expect(completed).toBeFalsy();
    expect(editing).toBeFalsy();
  });

  it('not emit when value is empty', () => {
    const newTodo = wrapper.find('#new-todo');

    newTodo.trigger('keyup.enter');

    expect(wrapper.emitted('create-todo')).toBeFalsy();
  });
});
