import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { HomePage } from './pages/HomePage';
import { AddTaskPage } from './pages/AddTaskPage';
import { EditTaskPage } from './pages/EditTaskPage';
import { AppLayout } from './components/layout/AppLayout';

export default function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddTaskPage />} />
            <Route path="/edit/:id" element={<EditTaskPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TodoProvider>
  );
}