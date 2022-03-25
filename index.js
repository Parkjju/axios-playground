// const { default: axios } = require('axios');

const btn = document.querySelector('#get');
const input = document.querySelector('#todoInputForm');

btn.addEventListener('click', performGetRequest1);

function performGetRequest1() {
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';

  axios.get('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
    const { id, title, completed } = result.data;
    resultElement.innerHTML = `<p class="todo-title">Todo no.<p class="todo-body">${id}</p><p><p class="todo-title">Title <p class="todo-body">${title}</p></p><p class="todo-title">Checked</p>`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    if (completed == true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    resultElement.appendChild(checkbox);
  });
}

function clearOutput(element) {
  element.nextElementSibling.innerHTML = '';
}

function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  resultElement.innerHTML = '';
  const input = document.querySelector('#todoId');
  const value = input.value;

  axios
    .get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        id: value,
      },
    })
    .then((result) => {
      const { id, title, completed } = result.data[0];

      resultElement.innerHTML = `<p class="todo-title">Todo no.<p class="todo-body">${id}</p><p><p class="todo-title">Title <p class="todo-body">${title}</p></p><p class="todo-title">Checked</p>`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      if (completed == true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
      resultElement.appendChild(checkbox);
    });
}

function performPostRequest(e) {
  e.preventDefault();
  const inputTitle = document.querySelector('#todoTitle');
  const inputId = document.querySelector('#todoId');
  const inputCheck = document.querySelector('#todoCheck');

  const title = inputTitle.value;
  const id = inputId.value;
  const checked = inputCheck.checked;
  axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      id: id,
      completed: checked,
    })
    .then((result) => {
      const resultElement = document.querySelector('#postResult');
      const { id, title, completed } = result.data;
      resultElement.innerHTML = `<p class="todo-title">Todo no.<p class="todo-body">${id}</p><p><p class="todo-title">Title <p class="todo-body">${title}</p></p><p class="todo-title">Checked</p>`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = checked;

      resultElement.appendChild(checkbox);
    });
}

input.addEventListener('submit', performPostRequest);
