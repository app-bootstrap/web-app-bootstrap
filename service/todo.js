import 'whatwg-fetch'

const postTodo = (todo) => {
  return new Promise((resolve, reject) => {
    fetch('/api/addTodos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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

export { postTodo }
