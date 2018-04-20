import { mount } from '@vue/test-utils';
import expect from 'expect';
import Todo from '../../../plain/components/todo.vue';

describe('Todo', () => {
  it('emit onComplete event when checkbox is toggle', () => {
    const wrapper = mount(Todo, {
      propsData: {
        item: {
          completed: false
        }
      }
    });

    const checkbox = wrapper.find('.toggle');

    checkbox.trigger('click');

    expect(wrapper.emitted('onComplete')[0][0].completed).toBeTruthy();
  });

  it('toggle checkbox', () => {
    const wrapper = mount(Todo, {
      propsData: {
        item: {
          completed: true
        }
      }
    });

    const value = wrapper.find('.toggle').element.value;

    expect(value).toBe('on');
  });

  it('emit delete event', () => {
    const wrapper = mount(Todo, {
      propsData: {
        item: {
          completed: false
        }
      }
    });

    const button = wrapper.find('.destroy');

    button.trigger('click');

    expect(wrapper.emitted('onDelete')[0][0].completed).toBeFalsy();
  });

  it('emit onEditing event', () => {
    const wrapper = mount(Todo, {
      propsData: {
        item: {
          editing: false
        }
      }
    });

    const div = wrapper.find('.view');

    div.trigger('dblclick');

    expect(wrapper.emitted('onEditing')[0][0].editing).toBeTruthy();
  });
});
