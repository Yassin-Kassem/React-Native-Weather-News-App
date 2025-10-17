import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);

    async function fetchTasks() {
        try {
            const storedTasks = await AsyncStorage.getItem("tasks");
            if(storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }else {
                setTasks([]);
            }    
            return tasks;
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
    fetchTasks();
  }, []);

    const createTask = async (taskText) => {
        try {
            if (!taskText.trim()) {
                alert("Task cannot be empty");
                return;
            }
            const newTask = {id: Date.now().toString(), text: taskText, completed: false};
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            console.log(newTask);
            console.log(updatedTasks);
            await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
        } catch (error) {
            console.log("Error creating task:", error.message);
        }
    }

    async function deleteTask(id) {
        try {
            const storedTasks = (await AsyncStorage.getItem("tasks")) || "[]";
            const parsedTasks = JSON.parse(storedTasks);
            const updatedTasks = parsedTasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
            await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
        } catch (error) {
            console.log(error.message);
        }
    }

    const toggleComplete = async (id) => {
        try {
            const updatedTasks = tasks.map(task => 
                task.id === id ? {...task, completed: !task.completed} : task
            );
            setTasks(updatedTasks);
            await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
            console.log(updatedTasks);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <TaskContext.Provider value = {{tasks, fetchTasks, createTask, deleteTask, toggleComplete}}>
            {children}
        </TaskContext.Provider>
    )
}

