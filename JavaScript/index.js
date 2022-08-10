//Stores the html form data in a constant.
const todoForm = document.getElementById("taskForm");
let idCounter = 0;
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
        let deleteSymbol = "\u00D7";
        let editSymbol = "\uD83D\uDD89";
        idCounter++
        const editIdCounter = idCounter;
        //For loop to add the task and description variables values to span's childs and then adding them as child to the li variable.

                span.appendChild(document.createTextNode(task));
                li.appendChild(span);
                span.id = `spanTask${idCounter}`;
                span.classList.add("taskOnList");
                span = document.createElement("span");
            
                span.appendChild(document.createTextNode(description));
                li.appendChild(span);
                span.id = `spanDescription${idCounter}`; 
                span.classList.add("descriptionOnList");
                span = document.createElement("span");

                //Creating the edit button on the li element.
                span.appendChild(document.createTextNode(editSymbol));
                span.addEventListener("click", function () {
                    let taskFormData = new FormData(todoForm);
                    //Stores the form's task and description field values in variables.
                    let task = taskFormData.get("formTask");
                    let description = taskFormData.get("formDescription");

                    if (task !== "" && description !== "") {
                        //Editing the span text with the new one.
                        document.getElementById(`spanTask${editIdCounter}`).innerHTML = task;
                        document.getElementById(`spanDescription${editIdCounter}`).innerHTML = description;
                        //Resets form.
                        document.getElementById("formTask").value = "";
                        document.getElementById("formDescription").value = "";
                    } else {
                        Swal.fire({
                            title: '',
                            text: 'Please fill task and description form fields to edit.',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                          })
                    }
                }
                )

                li.appendChild(span);
                span.classList.add("edit");
                span = document.createElement("span");
          

                span.appendChild(document.createTextNode(deleteSymbol));
                //Creates onclick event on the span for deleting items.
                span.addEventListener("click", function() {
                    div = this.parentElement;
                    div.remove();
                    //div.style.display = "none"; this code hides the element but doesn't erase it from the code.
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