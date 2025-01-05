import { Todo } from '../types/todo';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
}

export async function createTodo(todo: Omit<Todo, 'id'>): Promise<Todo> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to create todo');
  return response.json();
}

export async function updateTodo(todo: Todo): Promise<Todo> {
  const response = await fetch(`${BASE_URL}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to update todo');
  return response.json();
}