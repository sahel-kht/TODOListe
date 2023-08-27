// Js.js

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
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    }
}
