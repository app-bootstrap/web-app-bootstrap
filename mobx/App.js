'use strict';

import {
  action
} from 'mobx';
import React, {
  Component
} from 'react';
import {
  observer
} from 'mobx-react';
import classnames from 'classnames';

import '../assets/base.less';
import '../assets/app.less';

const ENTER_KEY_CODE = 13;

const getHashState = () => {
  return location.hash.replace('#/', '') || 'all';
};

const selectedClass = (type) => {
  return classnames({
    selected: type === getHashState()
  });
};

@observer
export default class App extends Component {
  componentDidMount() {
    window.onhashchange = () => {
      const state = getHashState();
      this.props.store.setVisibilityFilter(state);
    };
  }

  getData() {
    switch (this.props.store.type) {
      case 'active':
        return this.props.store.activeTodo;
      case 'completed':
        return this.props.store.completedTodo;
      default:
        return this.props.store.allTodo;
    }
  }

  render() {
    return (
      <div>
        <section id='todoapp'>
          <header id='header'>
            <h1>todos</h1>
            <input
              id='new-todo'
              placeholder='What needs to be done?'
              autoFocus={true}
              onKeyUp={this.onSubmitInput.bind(this)}
            />
          </header>
          <section id='main'>
            <input
              id='toggle-all'
              type='checkbox'
              onChange={
                e => {
                  if (e.target.checked) {
                    this.props.store.completedAll();
                  } else {
                    this.props.store.uncompletedAll();
                  }
                }
              }
            />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            <ul id='todo-list'>
              {
                this.getData().map((item, key) => {
                  return (
                    <li
                      data-id={item.id}
                      className={classnames({
                        editing: item.editing,
                        completed: item.completed
                      })}
                      onDoubleClick={
                        e => {
                          const id = e.currentTarget.getAttribute('data-id');
                          this.props.store.edit(id);
                          const target = e.currentTarget.querySelector('input.edit');
                          setTimeout(() => target.focus(), 0);
                        }
                      }
                      key={item.id}
                    >
                      <div className='view'>
                        <input
                          data-id={item.id}
                          className='toggle'
                          type='checkbox'
                          checked={item.completed}
                          onChange={
                            e => {
                              const id = e.currentTarget.getAttribute('data-id');
                              this.props.store.compelete(id);
                            }
                          }
                        />
                        <label>{item.content}</label>
                        <button
                          data-id={item.id}
                          className='destroy'
                          onClick={
                            e => {
                              const id = e.currentTarget.getAttribute('data-id');
                              this.props.store.removeTodo(id);
                            }
                          }
                        />
                      </div>
                      <input
                        data-id={item.id}
                        className='edit'
                        value={item.content}
                        onChange={this.onInputChange.bind(this)}
                        onKeyUp={this.onInputKeyUp.bind(this)}
                        onBlur={this.onInputBlur.bind(this)}
                      />
                    </li>
                  );
                })
              }
            </ul>
          </section>
          <footer id='footer'>
            <span id='todo-count'>
              <strong>{ this.props.store.activeTodo.length }</strong> {this.props.store.activeTodo.length === 1 ? 'item' : 'items'} left
            </span>
            <ul id='filters'>
              <li>
                <a className={selectedClass('all')} href='#/'>All</a>
              </li>
              <li>
                <a className={selectedClass('active')} href='#/active'>Active</a>
              </li>
              <li>
                <a className={selectedClass('completed')} href='#/completed'>Completed</a>
              </li>
            </ul>
            <button
              id='clear-completed'
              onClick={
                e => {
                  this.props.store.clearCompleted();
                }
              }
            >
              {`Clear completed (${this.props.store.completedTodo.length})`}
            </button>
          </footer>
        </section>
        <footer id='info'>
          <p>Double-click to edit a todo</p>
        </footer>
      </div>
    );
  }

  @action
  onSubmitInput(e) {
    e.preventDefault();
    if (e.keyCode === ENTER_KEY_CODE) {
      const value = e.target.value.trim();
      if (value) {
        this.props.store.addTodo(value);
        e.target.value = '';
      }
    }
  }

  @action
  onInputChange(e) {
    const value = e.target.value.trim();
    const id = e.target.getAttribute('data-id');
    this.props.store.updateItem({
      id,
      value
    });
  }

  @action
  onInputKeyUp(e) {
    const value = e.target.value.trim();
    const id = e.target.getAttribute('data-id');
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.store.update({
        id,
        value
      });
    }
  }

  @action
  onInputBlur(e) {
    const value = e.target.value.trim();
    const id = e.currentTarget.getAttribute('data-id');
    this.props.store.update({
      id,
      value
    });
  }
}
