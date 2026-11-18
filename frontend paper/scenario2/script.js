let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    // Ignore empty input
    if (text === "") {
        return;
    }

    // Store task as an object
    let task = {
        text: text,
        done: false
    };

    tasks.push(task);
    input.value = "";

    displayTasks();
}

// Add task when Enter is pressed
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text";

        if (task.done) {
            span.classList.add("completed");
        }

        // Toggle task completion
        span.onclick = function() {
            tasks[index].done = !tasks[index].done;
            displayTasks();
        };

        // Delete button
        let button = document.createElement("button");
        button.textContent = "Delete";

        button.onclick = function() {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(button);
        list.appendChild(li);
    });

    // Count remaining tasks
    let remainingTasks = tasks.filter(function(task) {
        return task.done === false;
    }).length;

    if (tasks.length === 0) {
        document.getElementById("remaining").textContent = "No tasks yet. Add one above!";
    } else {
        document.getElementById("remaining").textContent =
            remainingTasks + " of " + tasks.length + " tasks remaining";
    }
}

displayTasks();