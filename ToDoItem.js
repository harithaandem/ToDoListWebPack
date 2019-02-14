    function ToDoItem() {
    }

   ToDoItem.prototype.init = function(toDoManager) {
        var that = this;
        document.getElementById("bottom_div").addEventListener('click', function(){
            that.listHandler(toDoManager, event);
        });
    }

    ToDoItem.prototype.createFragment = function(timeStamp,descriptionToBeAdded) {
        var item = document.querySelector(".inner_div");
        var clone = item.cloneNode(true);
        clone.querySelector('[data-list="list"]').textContent = descriptionToBeAdded;
        clone.setAttribute("toDoId", timeStamp);
        clone.removeAttribute("id");
        clone.classList.remove("inner_div");
        clone.classList.add("div_list");
        return clone;
    }

    ToDoItem.prototype.listHandler = function(toDoManager, event) {
            if(event.target !== event.currentTarget) {
                var targetElement=event.target;
                var toDoItemId = (function(targetElement){
                    while(true) {
                    if(targetElement.getAttribute("data-type") !== "list_div") {
                       targetElement=targetElement.parentElement;
                    }
                    else {
                       break;
                    }
                    }
                    return targetElement.getAttribute("toDoId");
                })(targetElement);
                switch(event.target.getAttribute("data-type")) {
                    case "done":
                        switch(toDoManager.toDoListArray[toDoItemId].toDoStatus) {
                            case false: 
                                toDoManager.toDoListArray[toDoItemId].toDoStatus = true;
                                 break;
                            case true:
                                toDoManager.toDoListArray[toDoItemId].toDoStatus = false;
                                break;
                        }
                    break;
                    case "delete":
                        delete toDoManager.toDoListArray[toDoItemId];
                    break;
                    case "update":
                        var updateFromPrompt = prompt("enter to update"," ");
                        toDoManager.toDoListArray[toDoItemId].toDoText+=updateFromPrompt;
                    break;
                    default: break;
                }
                toDoManager.render();
            }
        event.stopPropagation();
    }

    export {ToDoItem};