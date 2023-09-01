// Js.js

// Function to save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("task-list");

    taskList.innerHTML = ""; // Clear existing list

    tasks.forEach(function (taskText) {
        var li = document.createElement("li");
        li.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskText);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to add a task to the list and save it in localStorage
function hinzufuegen() {
    var taskInput = document.getElementById("Hinzufügen");
    var taskText = taskInput.value;

    if (taskText !== "") {
        var taskList = document.getElementById("task-list");
        var li = document.createElement("li");
        li.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(taskText);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        saveTasksToLocalStorage(tasks);

        taskInput.value = "";
        taskInput.focus();
    }
}

// Function to remove a task from the list and localStorage
function removeTaskFromLocalStorage(taskToRemove) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var updatedTasks = tasks.filter(function (task) {
        return task !== taskToRemove;
    });
    saveTasksToLocalStorage(updatedTasks);
}

// Load tasks from localStorage when the page is ready
document.addEventListener("DOMContentLoaded", function () {
    loadTasksFromLocalStorage();
});
