// Select elements
const input = document.getElementById("input");
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task-btn");

// Function to add a task
function addTask() {
    const task = input.value.trim(); // Get and trim input value
    if (task === "") {
        alert("Task added successfully!");
        return; // Exit function if the input is empty
    }

    // Create task item container
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    // Create task text
    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.classList.add("task-text");

    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => {
        const newTask = prompt("Edit task:", taskText.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask.trim();
        }
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => taskItem.remove());

    // Append elements to the task item
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear input field
    input.value = "";
}

// Attach event listener to the Add button
addTaskButton.addEventListener("click", addTask);

// Allow pressing "Enter" to add a task
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
