import wretch from 'wretch';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
export const getSomeData = wretch(url).get().json();

const adress = 'https://jsonplaceholder.typicode.com/users';
export const fetchForThunk = () => fetch(adress)
  .then(response => response.json());
