//Stores the html form data in a constant.
const todoForm = document.getElementById("taskForm");

//On the event "submit" of our submit form button prevents the default browser behavior (refreshing) and adds the new item data to the unordered list.
todoForm.addEventListener("submit", function(event) {
        event.preventDefault();

        //Creates the FormData for our form.
        let taskFormData = new FormData(todoForm);
        //Stores the form's task and description values in variables.
        let task = taskFormData.get("formTask");
        let description = taskFormData.get("formDescription");
        //Resets form.
        document.getElementById("formTask").value = "";
        document.getElementById("formDescription").value = "";
        //Sets variables to create li and span html elements.
        let li = document.createElement("li");
        let span = document.createElement("span");
        let close = "\u00D7";
        //For loop to add the task and description variables values to span's childs and then adding them as child to the li variable.

                span.appendChild(document.createTextNode(task));
                li.appendChild(span);
                span.classList.add("taskOnList");
                span = document.createElement("span");
            
                span.appendChild(document.createTextNode(description));
                li.appendChild(span);
                span.classList.add("descriptionOnList");
                span = document.createElement("span");

                span.appendChild(document.createTextNode(close));
                //Creates onclick event on the span for deleting items.
                span.addEventListener("click", function(event) {
                    div = this.parentElement;
                    div.remove();
                    //div.style.display = "none"; this code hides the element but dont erase it from the code.
                }

                )
                li.appendChild(span);
                span.classList.add("delete");
                span = document.createElement("span");
               
            

        //Creates a li element as a child of the unordered list which has two span childs with task and description values for css styling.
        document.getElementById("ulTasks").appendChild(li);
        //Adding a class to the li element we created for styling.
        li.classList.add("listItem");
        

    }
);

let list = document.querySelector("ul");

list.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
           }
    }
)