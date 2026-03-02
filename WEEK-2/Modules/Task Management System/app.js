// iii. app.js - Main application
// TODO: Import task functions
import {addTask,completeTask,getAllTasks} from './task.js'
// Test your module system
// 1. Add some tasks
addTask("JavaScript coding","High","2025-02-12")
addTask("Cooking","low","2025-02-12")
addTask("GYM","High","2025-02-12")

// 2. Display all tasks
getAllTasks()
// 3. Complete a task
completeTask(2)
// 4. Display all tasks again
getAllTasks()