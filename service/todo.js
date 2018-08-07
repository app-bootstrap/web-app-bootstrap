import 'whatwg-fetch'

const headers = {
  'Content-Type': 'application/json'
}

const postTodo = (todo) => {
  return new Promise((resolve, reject) => {
    fetch('/api/addTodos', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        todo: todo,
      })
    }).then((response) => {
      return response.json()
    }).then(json => {
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    fetch('/api/deleteTodos', {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify({
        id,
      })
    }).then((response) => {
      return response.json()
    }).then(json => {
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

const completeTodos = (id) => {
  return new Promise((resolve, reject) => {
    fetch('/api/completedTodos', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        id,
      })
    }).then((response) => {
      return response.json()
    }).then(json => {
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

const editingTodos = (id) => {
  return new Promise((resolve, reject) => {
    fetch('/api/editTodos', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        id,
      })
    }).then((response) => {
      return response.json()
    }).then(json => {
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

export {
  postTodo,
  deleteTodo,
  completeTodos,
  editingTodos,
}
