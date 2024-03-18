const form = document.querySelector('.form');
const inputtext = document.querySelector('.add-todo__input'); // '.add-todo__input'ga o'zgartirildi
const ulItem = document.querySelector('.todo__list');
const chekbox = document.querySelector('.todo__checkbox');

// DATA massivi
let DATA = [
  {
    id: '1',
    text: 'kartoshka',
  },
  {
    id: '2',
    text: 'banan',
  }
];
console.log(DATA);

class NewTodo {
  constructor(text) {
    this.id = `id-${new Date().getTime()}`
    this.text = text
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let newtodo = new NewTodo(inputtext.value,);
  DATA.push(newtodo);
  createTodo(DATA);
  inputtext.value = '';
});

function createTodo(data) {
  while (ulItem.firstChild) {
    ulItem.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((todo, index) => {
    let li = document.createElement('li');
    li.innerHTML = ` <li class="todo__item">
    <label class="Todo__label">
    <span class="id">${index+1}</span> <input class="todo__checkbox" type="checkbox"  name="todo_name" data-id="id">
      <span class="todo__text">${todo.text}</span>
    </label>
    <button class="todo__btn" onclick="DeletTodo(${index})" type="button" data-id="id"><i class="fa-solid fa-trash-can"></i></button>
  </li>`;
  fragment.appendChild(li);
  });

  ulItem.appendChild(fragment);
}

createTodo(DATA);

function DeletTodo(index) {
  DATA.splice(index, 1);
  createTodo(DATA);
}
