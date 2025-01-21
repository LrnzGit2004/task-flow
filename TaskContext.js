import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches depuis AsyncStorage
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("tasks");
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.error("Erreur lors du chargement des tâches :", error);
      }
    };

    loadTasks();
  }, []);

  // Sauvegarder les tâches dans AsyncStorage
  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des tâches :", error);
    }
  };

  // Ajouter une tâche
  // let taskIdCounter = 1;

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now().toString() }; // ID unique basé sur un compteur
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  // Modifier une tâche
  // const editTask = (id, updatedTask) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, ...updatedTask } : task
  //   );
  //   setTasks(updatedTasks);
  //   saveTasks(updatedTasks);
  // };

  // Supprimer une tâche
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Met à jour uniquement les tâches restantes
    saveTasks(updatedTasks); // Sauvegarde les nouvelles données
  };

  // Changer l'état d'une tâche
  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "in_progress" ? "completed" : "in_progress",
          }
        : task
    );
    setTasks(updatedTasks); // Met à jour l'état des tâches
    saveTasks(updatedTasks); // Sauvegarde les nouvelles données
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};
