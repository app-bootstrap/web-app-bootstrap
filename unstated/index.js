'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Provider, Subscribe } from 'unstated';

import TodoContainer from './container/todo';
import TypeContainer from './container/type';

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

function App() {
  const viewFilter = (data, type = 'all') => {
    const all = [].concat(data).reverse();
    switch (type) {
      case 'all':
        return all;
      case 'active':
        return all.filter(item => !item.completed);
      case 'completed':
        return all.filter(item => item.completed);
      default:
        return all;
    }
  };

  return (
    <Subscribe to={[TodoContainer, TypeContainer]}>
      {(todo, typeState) => (
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
                        todo.add(value);
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
                    todo[e.target.checked ? 'completedAll' : 'uncompletedAll']();
                  }
                }
              />
              <label htmlFor='toggle-all'>Mark all as complete</label>
              <ul id='todo-list'>
                {
                  viewFilter(todo.state.todos, typeState.state.type).map((item, key) => {
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
                            todo.edit(id);
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
                                todo.compelete(id);
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
                                todo.remove(id);
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
                              todo.updateItem(id, value);
                            }
                          }
                          onKeyUp={
                            e => {
                              const value = e.target.value.trim();
                              const id = e.target.getAttribute('data-id');
                              if (e.keyCode === ENTER_KEY_CODE) {
                                todo.update(id, value);
                              }
                            }
                          }
                          onBlur={
                            e => {
                              const value = e.target.value.trim();
                              const id = e.currentTarget.getAttribute('data-id');
                              todo.update(id, value);
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
                <strong>{viewFilter(todo.state.todos, 'active').length}</strong> {viewFilter(todo.state.todos, 'active').length === 1 ? 'item' : 'items'} left
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
                    todo.clearCompleted();
                  }
                }
              >
                {`Clear completed (${viewFilter(todo.state.todos, 'completed').length})`}
              </button>
            </footer>
          </section>
          <footer id='info'>
            <p>Double-click to edit a todo</p>
          </footer>
        </div>
      )}
    </Subscribe>
  );
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector('#app')
);
