// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(!title || title.length<3){
       return "Invalid title"
    }
    return true
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    if(priority!='low' ||priority!='medium' ||priority!='high'){
        return false
    }
    return true

}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
    return true;
}
    

export {validateTitle,validatePriority,validateDueDate}