// TODO: Import validator functions
import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
const tasks = [];
                    
//1. Add new task
function addTask(title, priority, dueDate) {
    if(!validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate)){
       Invalid
        return 
    }
    tasks.push({
        Title:title,
        Priority:priority,
        DueDate:dueDate
    })
    console.log("Added Sucessfully")
    
}
                    
// 2. Get all tasks
function getAllTasks() {
    for(let obj of tasks){
        console.log(obj)
    }
}
                    
// 3. Mark task as complete
function completeTask(taskId) {
    tasks.splice(taskId,1)
    console.log("Task:",taskId,"completed")
}

export {addTask,getAllTasks,completeTask};