import axios from 'axios';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((Response) => {
  const { id, title, completed } = Response.data as ToDo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    the todo with id: ${id},
    has a title: ${title},
    is it finished? ${completed}
  `);
};
