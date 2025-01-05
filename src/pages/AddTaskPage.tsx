import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useTodo } from '../context/TodoContext';
import { createTodo } from '../services/todoApi';

export function AddTaskPage() {
  const navigate = useNavigate();
  const { dispatch } = useTodo();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (data: Partial<Todo>) => {
    setIsLoading(true);
    try {
      const newTodo = await createTodo({
        ...data,
        completed: false,
        userId: 1,
      } as Todo);
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      navigate('/');
    } catch (error) {
      console.error('Failed to create todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Task</h1>
      <TodoForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}