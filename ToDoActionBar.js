function ToDoActionBar(descriptionToBeAdded, timeStamp) {
        this.toDoText=descriptionToBeAdded;
        this.toDoId=timeStamp;
        this.toDoStatus=false;
        this.toDoChecked=false;
    }

    ToDoActionBar.prototype.init=function(toDoManager) {
        var that = this;
        document.getElementById("add_button").addEventListener('click', function() {
            that.addToDoItem(toDoManager);
        });
        document.getElementById("delete_all").addEventListener('click', function() {
            that.deleteAllItems(toDoManager);
        });
        document.getElementById("delete_selected_button").addEventListener('click', function() {
            that.deleteSelected(toDoManager);
        });
    }

    ToDoActionBar.prototype.addToDoItem=function(toDoManager) {
        var date = new Date();
        var timeStamp = date.getTime();
        var textEntered = document.getElementById("textbox");
        var descriptionToBeAdded = textEntered.value;
        if(!descriptionToBeAdded) {
             var textFromPrompt = prompt("enter something", " ");
             descriptionToBeAdded = textFromPrompt;
        }
        var toDoElement = new ToDoActionBar(descriptionToBeAdded, timeStamp);
        toDoManager.toDoListArray[timeStamp] = toDoElement;
        textEntered.value = "";
        toDoManager.render();
    } 

   ToDoActionBar.prototype.deleteAllItems=function(toDoManager) {
        for(var toDoItemTimeStamp in toDoManager.toDoListArray) {
           delete toDoManager.toDoListArray[toDoItemTimeStamp];
        }   
        toDoManager.render();
    }

    ToDoActionBar.prototype.deleteSelected=function(toDoManager) {
        for(var toDoItemTimeStamp in toDoManager.toDoListArray) {
            var selectedParentElement = document.querySelector(`[toDoId="${toDoItemTimeStamp}"]`);
            if(selectedParentElement.querySelector('[data-check="check"]').checked) {
                delete toDoManager.toDoListArray[toDoItemTimeStamp];   
            }
        }
        toDoManager.render();
    }

export {ToDoActionBar};