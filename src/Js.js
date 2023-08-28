// Js.js

// Funktion zum Hinzufügen einer Aufgabe
function hinzufuegen() {
    // Eingabefeld für die Aufgabe abrufen
    var taskInput = document.getElementById("Hinzufügen");
    // Den eingegebenen Text aus dem Eingabefeld abrufen
    var taskText = taskInput.value;

    // Prüfen, ob der eingegebene Text nicht leer ist
    if (taskText !== "") {
        // Aufgabenliste und Aufgaben-Container im HTML abrufen
        var taskList = document.getElementById("task-list");

        // Ein neues <li> Element erstellen und den Text der Aufgabe setzen
        var li = document.createElement("li");
        li.textContent = taskText;
        taskInput.value=null;

        // Ein "Löschen" Button erstellen
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";
        deleteButton.className = "delete"; // CSS-Klasse für das Styling
        // Event Listener für das Klicken des "Löschen" Buttons hinzufügen
        deleteButton.addEventListener("click", function () {
            // Das <li> Element aus der Aufgabenliste entfernen
            taskList.removeChild(li);
            // Aufgabe aus dem Local Storage entfernen
            removeTaskFromLocalStorage(taskText);
        });

        // Den "Löschen" Button zum <li> Element hinzufügen
        li.appendChild(deleteButton);
        // Das <li> Element zur Aufgabenliste hinzufügen
        taskList.appendChild(li);

        // Aufgabe zum Local Storage hinzufügen
        addTaskToLocalStorage(taskText);

        // Eingabefeld leeren und Fokus darauf setzen
        taskInput.value = "";
        taskInput.focus();
    }
}

;
