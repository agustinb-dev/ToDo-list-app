//Stores the html form data in a constant.
const todoForm = document.getElementById("taskForm");
let idCounter = 0;

function resetSpan (span){
  return span = document.createElement("span");
}

function elementCreator (li, span, text, idName, idCounter, className) {
  span.appendChild(document.createTextNode(text));
  li.appendChild(span);
  span.id = idName+idCounter;
  span.classList.add(className);
  span = document.createElement("span");
}

function addEditButton (li, span, editSymbol, editIdCounter){
  //Creating the edit button on the li element.
  span.appendChild(document.createTextNode(editSymbol));
  span.addEventListener("click", function () {
      let taskFormData = new FormData(todoForm);
      //Stores the form's task and description field values in variables.
      let task = taskFormData.get("formTask");
      let description = taskFormData.get("formDescription");
      console.log(editIdCounter);
      if (task !== "" && description !== "") {
          //Editing the span text with the new one.
          document.getElementById(`spanTask${editIdCounter}`).innerHTML = task;
          document.getElementById(`spanDescription${editIdCounter}`).innerHTML = description;
          //Resets form.
          document.getElementById("formTask").value = "";
          document.getElementById("formDescription").value = "";
          //Edit button success alert.
          Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Task edited',
              showConfirmButton: false,
              timer: 1000
            })
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
}

function addDeleteButton(li, span, deleteSymbol){
  span.appendChild(document.createTextNode(deleteSymbol));
  //Creates onclick event on the span for deleting items.
  span.addEventListener("click", function() {

      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your task has been deleted.',
              'success'
            )
              div = this.parentElement;
              div.remove();
          }
        })

      /*Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Task deleted',
          showConfirmButton: false,
          timer: 1000
        })*/
      //div.style.display = "none"; this code hides the element but doesn't erase it from the code.
  }
  )

  li.appendChild(span);
  span.classList.add("delete");
  span = document.createElement("span");
}

function elementMaker (li, span, task, description, idCounter, editSymbol, deleteSymbol, editIdCounter) {
  elementCreator(li, span, task, 'spanTask', idCounter, 'taskOnList');
  span = resetSpan(span);
  elementCreator(li, span, description, 'spanDescription', idCounter, 'descriptionOnList');
  span = resetSpan(span);
  addEditButton(li, span, editSymbol, editIdCounter);
  span = resetSpan(span);
  addDeleteButton(li, span, deleteSymbol);
}

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
        //
                elementMaker(li, span, task, description, idCounter, editSymbol, deleteSymbol, editIdCounter);
                span = resetSpan(span);

        //Creates a li element as a child of the unordered list which has two span childs with task and description values for css styling.
        document.getElementById("ulTasks").appendChild(li);
        //Adding a class to the li element we created for styling.
        li.classList.add("listItem");
        
        //Submit button success alert.
        Swal.fire({
            position: 'top',
            icon: 'success',
            width: 300,
            title: '',
            showConfirmButton: false,
            timer: 1000
          })
    }
);

let list = document.querySelector("ul");

list.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
            }   
    }
)