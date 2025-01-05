import React, { useState } from 'react';
import { Todo } from '../types/todo';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';

interface TodoFormProps {
  initialData?: Todo;
  onSubmit: (data: Partial<Todo>) => void;
  isLoading?: boolean;
}

export function TodoForm({ initialData, onSubmit, isLoading }: TodoFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [description, setDescription] = useState(initialData?.description ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter task title"
      />
      <TextArea
        label="Description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        placeholder="Enter task description (optional)"
      />
      <Button type="submit" isLoading={isLoading}>
        Save Task
      </Button>
    </form>
  );
}