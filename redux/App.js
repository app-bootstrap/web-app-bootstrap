'use strict';

import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as actions from './actions';

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

const App = ({
  actions,
  todos,
  active,
  completed
}) => {
  window.onhashchange = () => {
    const state = getHashState();
    actions.setVisibilityFilter(state);
  };
  return (
    <div>
      <section id='todoapp'>
        <header id='header'>
          <h1>todos</h1>
          <input
            id='new-todo'
            placeholder='What needs to be done?'
            autoFocus={true}
            onKeyUp={
              e => {
                if (e.keyCode === ENTER_KEY_CODE) {
                  const value = e.target.value.trim();
                  if (value) {
                    actions.add(value);
                    e.target.value = '';
                  }
                }
              }
            }
          />
        </header>
        <section id='main'>
          <input
            id='toggle-all'
            type='checkbox'
            onChange={
              e => {
                actions[e.target.checked ? 'completedAll' : 'uncompletedAll']();
              }
            }
          />
          <label htmlFor='toggle-all'>Mark all as complete</label>
          <ul id='todo-list'>
            {
              [].concat(todos).reverse().map((item, key) => {
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
                        actions.edit(id);
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
                            actions.compelete(id);
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
                            actions.remove(id);
                          }
                        }
                      />
                    </div>
                    <input
                      data-id={item.id}
                      className='edit'
                      value={item.content}
                      onChange={
                        e => {
                          const value = e.target.value.trim();
                          const id = e.target.getAttribute('data-id');
                          actions.updateItem({
                            id,
                            value
                          });
                        }
                      }
                      onKeyUp={
                        e => {
                          const value = e.target.value.trim();
                          const id = e.target.getAttribute('data-id');
                          if (e.keyCode === ENTER_KEY_CODE) {
                            actions.update({
                              id,
                              value
                            });
                          }
                        }
                      }
                      onBlur={
                        e => {
                          const value = e.target.value.trim();
                          const id = e.currentTarget.getAttribute('data-id');
                          actions.update({
                            id,
                            value
                          });
                        }
                      }
                    />
                  </li>
                );
              })
            }
          </ul>
        </section>
        <footer id='footer'>
          <span id='todo-count'>
            <strong>{active.length}</strong> {active.length === 1 ? 'item' : 'items'} left
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
                actions.clearCompleted();
              }
            }
          >
            {`Clear completed (${completed.length})`}
          </button>
        </footer>
      </section>
      <footer id='info'>
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  );
};

App.propTypes = {
  actions: PropTypes.object,
  todos: PropTypes.array,
  active: PropTypes.array,
  completed: PropTypes.array
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  active: getVisibleTodos(state.todos, 'active'),
  completed: getVisibleTodos(state.todos, 'completed')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
