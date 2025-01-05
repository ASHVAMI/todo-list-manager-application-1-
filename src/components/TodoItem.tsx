import React from 'react';
import { Todo } from '../types/todo';
import { CheckCircle2, Circle, Pencil, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="task-card glass-effect rounded-xl p-5 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {todo.completed ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-500 transition-colors" />
        ) : (
          <Circle className="w-6 h-6 text-violet-400 hover:text-violet-600 cursor-pointer transition-colors" />
        )}
        <div>
          <h3 className={`text-lg font-medium ${
            todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
          }`}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className="text-gray-600 text-sm mt-1">{todo.description}</p>
          )}
          <div className="flex items-center space-x-2 mt-2">
            <Calendar className="w-4 h-4 text-violet-400" />
            <span className="text-xs text-gray-500">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <Link
        to={`/edit/${todo.id}`}
        className="p-2 text-violet-500 hover:text-violet-700 hover:bg-violet-50 rounded-full transition-colors"
      >
        <Pencil className="w-5 h-5" />
      </Link>
    </div>
  );
}