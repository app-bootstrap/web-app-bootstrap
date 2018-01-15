'use strict';

import React from 'react';
import classnames from 'classnames';

import '../assets/base.less';
import '../assets/app.less';

function View(props) {
  return (
    <div>
      <section id='todoapp'>
        <header id='header'>
          <h1>todos</h1>
          <input
            id='new-todo'
            placeholder='What needs to be done?'
            autoFocus
            keyupenter='onKeyup'
          />
        </header>
        <section id='main'>
          <input
            id='toggle-all'
            type='checkbox'
            checked='toggleAllChecked'
            clickprevent='toggleAll'
          />
          <label for='toggle-all'>Mark all as complete</label>
          <ul id='todo-list'>
            <li
              v-for='item in data'
              data-id='item.id'
              className='[{editing: item.editing, completed: item.completed}]'
              dblclickprevent='editing'
            >
              <div className='view'>
                <input
                  data-id='item.id'
                  className='toggle'
                  type='checkbox'
                  checked='item.completed'
                  clickprevent='onItemClick'
                />
                <label>item.content</label>
                <button
                  data-id='item.id'
                  className='destroy'
                  clickprevent='destroy'
                />
              </div>
              <input
                data-id='item.id'
                className='edit'
                value='item.content'
                keyupenter='handleItemContent'
                focusout='handleItemContent'
              />
            </li>
          </ul>
        </section>
        <footer id='footer'>
          <span id='todo-count'>
            <strong>getActive.length</strong> {5 === 1 ? 'item' : 'items'} left
          </span>
          <ul id='filters'>
            <li>
              <a className="selectedClass('all')" href='#/'>All</a>
            </li>
            <li>
              <a className="selectedClass('active')" href='#/active'>Active</a>
            </li>
            <li>
              <a className="selectedClass('completed')" href='#/completed'>Completed</a>
            </li>
          </ul>
          <button
            id='clear-completed'
            clickprevent='clearAll'
          >
            {`Clear completed ()`}
          </button>
        </footer>
      </section>
      <footer id='info'>
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
  );
}

export default View;
