const tasks = [] // init where todos will go

while (true) {

    // asking for user input
    let task =  prompt ("Enter a task (or type done to finish)");

    // check if user input is done or Done or DONE
    if (task.toLowerCase() === 'done') {
        break; // if done breaking out of the loop
    }
    tasks.push(task);// asking user input the task
}

console.log("Your Todo List:")

for ( let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}
// tasks.forEach((task,index) => {
//     console.log(`${index + 1}: ${task}`);
// });
