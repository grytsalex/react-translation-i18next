import wretch from 'wretch';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
export const getSomeData = wretch(url).get().json();
