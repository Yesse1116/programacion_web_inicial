import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

const App = () => {
  const [tasksByDate, setTasksByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  };

  const addTask = (title) => {
    const dateString = formatDate(selectedDate);
    const newTask = { id: Date.now(), title, completed: false };

    setTasksByDate(prevTasks => ({
      ...prevTasks,
      [dateString]: [...(prevTasks[dateString] || []), newTask]
    }));
  };

  const toggleTask = (id) => {
    console.log("Toggling task with id:", id); // Verificar la ID de la tarea
    const dateString = formatDate(selectedDate);
    setTasksByDate(prevTasks => {
      const updatedTasks = prevTasks[dateString].map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      console.log("Updated tasks:", updatedTasks); // Verificar tareas actualizadas
      return {
        ...prevTasks,
        [dateString]: updatedTasks
      };
    });
  };

  const deleteTask = (id) => {
    console.log("Deleting task with id:", id); // Verificar la ID de la tarea
    const dateString = formatDate(selectedDate);
    setTasksByDate(prevTasks => ({
      ...prevTasks,
      [dateString]: prevTasks[dateString].filter(task => task.id !== id)
    }));
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              tasksByDate={tasksByDate}
              addTask={addTask}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          } 
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

