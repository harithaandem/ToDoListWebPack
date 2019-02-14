import {ToDoActionBar} from './ToDoActionBar';
import {ToDoItem} from './ToDoItem';

function ToDoManager() {
        this.toDoListArray = { };
    }

   ToDoManager.prototype.init=function() {
        const toDoActionBar = new ToDoActionBar();
        toDoActionBar.init(this);
        const toDoItem = new ToDoItem();
        toDoItem.init(this);
    }

    ToDoManager.prototype.render=function() {
        var toDoContainer = document.getElementById("bottom_div");
        var hiddenDiv = document.getElementById("hidden_div");
        toDoContainer.innerHTML = "";
        toDoContainer.appendChild(hiddenDiv);

        for(var timeStamp in this.toDoListArray) {
            const toDoItem = new ToDoItem();
            var descriptionToBeAdded = this.toDoListArray[timeStamp].toDoText;
            var clone=toDoItem.createFragment(timeStamp,descriptionToBeAdded);
            document.querySelector(".bottom").appendChild(clone);
            var selectedElement = clone.querySelector('[data-list="list"]');
            if(this.toDoListArray[timeStamp].toDoStatus) {
                selectedElement.classList.remove('list');
                selectedElement.classList.add('list_changed'); 
            }
            else {
                selectedElement.classList.remove('list_changed'); 
                selectedElement.classList.add('list');  
            }
        }
    }

export {ToDoManager};