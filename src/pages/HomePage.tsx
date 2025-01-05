import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TodoItem } from '../components/TodoItem';
import { useTodo } from '../context/TodoContext';
import { fetchTodos } from '../services/todoApi';
import { PlusCircle, Loader2, ListTodo } from 'lucide-react';

export function HomePage() {
  const { state, dispatch } = useTodo();

  useEffect(() => {
    async function loadTodos() {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const todos = await fetchTodos();
        dispatch({ type: 'SET_TODOS', payload: todos });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load todos' });
      }
    }
    loadTodos();
  }, [dispatch]);

  if (state.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="glass-effect rounded-2xl p-8 mb-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <ListTodo className="w-8 h-8 text-violet-500" />
            <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
          </div>
          <Link
            to="/add"
            className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/30"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Add Task
          </Link>
        </div>
        
        {state.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {state.error}
          </div>
        )}

        <div className="space-y-4">
          {state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {state.todos.length === 0 && !state.loading && (
            <div className="text-center py-12">
              <ListTodo className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No tasks found. Start by adding your first task!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}