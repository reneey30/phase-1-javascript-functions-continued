// code your solution here
function saturdayFun(toDo ="roller-skate") {
    
    return "This Saturday, I want to " + toDo + "!";
}
 
function mondayWork(task = "go to the office") {
    return "This Monday, I will " + task + "."
}

function wrapAdjective(highlight) {
    const innerFunction = function(adjective){
        return "You are " + highlight + adjective + highlight + "!";
    }
    return innerFunction;
}