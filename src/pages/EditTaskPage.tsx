import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useTodo } from '../context/TodoContext';
import { updateTodo } from '../services/todoApi';
import { Loader2 } from 'lucide-react';

export function EditTaskPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useTodo();
  const [isLoading, setIsLoading] = useState(false);

  const todo = state.todos.find((t) => t.id === Number(id));

  useEffect(() => {
    if (!todo) {
      navigate('/');
    }
  }, [todo, navigate]);

  const handleSubmit = async (data: Partial<Todo>) => {
    if (!todo) return;
    
    setIsLoading(true);
    try {
      const updatedTodo = await updateTodo({
        ...todo,
        ...data,
      });
      dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
      navigate('/');
    } catch (error) {
      console.error('Failed to update todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!todo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Task</h1>
      <TodoForm
        initialData={todo}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}