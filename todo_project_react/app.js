

let todoList = [
    {
        todoTitle: "test1",
        todoTime: "time1",
        todoContent: "testtesttest1"
    },
    {
        todoTitle: "test2",
        todoTime: "time2",
        todoContent: "testtesttest2"
    },
    {
        todoTitle: "test3",
        todoTime: "time3",
        todoContent: "testtesttest3"
    }
]

let doneList = [
    {
        doneTitle: "test1",
        doneTime: "time1",
        doneContent: "testtesttest1"
    },
    {
        doneTitle: "test2",
        doneTime: "time2",
        doneContent: "testtesttest2"
    },
    {
        doneTitle: "test3",
        doneTime: "time3",
        doneContent: "testtesttest3"
    }
]

//react attempts

class TODO extends React.Component {
    constructor(props) {
        this.state = {
            title: props.title,
            content: props.content,
        };
    }

    render() {
        return (
            <section>
                <div class="panel">
                    <div class="panel-heading">
                        <h2>{props.title}</h2>
                        <a class="delete">X</a>
                    </div>
                    <div class="panel-text">
                        <p>{props.time}</p>
                        <p>{props.content}</p>
                    </div>
                    <div class="panel-button">
                        <button class="edit" id="editButton">Edit</button>
                        <button class="complete" id="completeButton">Complete</button>
                    </div>
                </div>

            </section>
        )
    }
}


















refresh();
document.getElementById("addNew").addEventListener('click', function () {
    document.getElementById("addNewPanel").classList.add("show");

})


//add new
function addNewTodo() {

    clearPanel();

    let title = document.getElementById("titleInput").value;
    console.log(title);
    let content = document.getElementById("contentInput").value;
    console.log(content);

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let currentTime = today.toString();
    console.log(currentTime);

    if (title == "" || content == "") {
        alert("Title or content cannot be blanked!");
    }
    if (title != "" && content != "") {
        tempList =
        {
            todoTitle: title,
            todoTime: currentTime,
            todoContent: content
        }
        console.log("Saving new data");
        console.log(tempList);
        todoList.unshift(tempList);
    }

}

//save
document.getElementById("saveButton").addEventListener('click', function (event) {
    console.log("save clicked!");
    addNewTodo();
    console.log("adding new todo");
    hidePanel();
    refresh();
})

//refresh when saving, completeing, undoing todo
function refresh() {
    //when saving, completing, undoing

    //clear panel
    var elementPanel = document.getElementById("currentTODO");
    for (let element in todoList) {
        elementPanel.innerHTML = "";
    }

    var elementPanel = document.getElementById("completeTODO");
    for (let element in todoList) {
        elementPanel.innerHTML = "";
    }

    //re-render panel
    displayPanel();
    displayComplete();
    completeTask();
    undoTask();
    deleteTODO();
    deleteDone();
    editTask();
    clearPanel();
}


//complete
function completeTask() {
    todoItems = document.getElementsByClassName("complete");
    let index = 0;

    //set index for each element
    for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].addEventListener('click', function (event) {
            console.log("complete clicked at i:", i);
            console.log(event);

            console.log(todoList[i]);

            //get current data and move to doneList
            tempList =
            {
                doneTitle: todoList[i].todoTitle,
                doneTime: todoList[i].todoTime,
                doneContent: todoList[i].todoContent
            }

            doneList.unshift(tempList);
            console.log(doneList);

            //remove current data from todoList
            todoList.splice(i, 1);

            //refresh
            refresh();
        })
    }
}


//delete todoList
function deleteTODO() {
    todoItems = document.getElementsByClassName("delete");

    //get current element and delete
    for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].addEventListener('click', function (event) {
            console.log("delete clicked at i:", i);
            console.log(event);

            //remove current data from todoList
            todoList.splice(i - 1, 1);

            //refresh
            refresh();
        })
    }
}
//delete doneList
function deleteDone() {
    todoItems = document.getElementsByClassName("delete");

    //get current element and delete
    for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].addEventListener('click', function (event) {
            console.log("delete clicked at i:", i);
            console.log(event);

            //remove current data from todoList
            doneList.splice(i - 1, 1);

            //refresh
            refresh();
        })
    }
}


//edit
function editTask() {
    todoItems = document.getElementsByClassName("edit");
    let index = 0;

    //set index for each element
    for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].addEventListener('click', function (event) {
            console.log("edit clicked at i:", i);
            console.log(event);

            console.log("In edit item:");
            console.log(todoItems[i]);

            //get current data and put in addNewPanel

            todoTitle = todoList[i].todoTitle;
            todoContent = todoList[i].todoContent;

            //open addNewPanel
            document.getElementById("addNewPanel").classList.remove("hidden");

            //put data back so they can be edited
            document.getElementById("titleInput").innerText = todoTitle;
            document.getElementById("contentInput").innerText = todoContent;

            //call addNewTodo?
            todoList.splice(i, 1);

        })
    }
}


//showPanel
document.getElementById("addNew").addEventListener('click', function (event) {
    console.log("addNew clicked");
    document.getElementById("addNewPanel").classList.remove("hidden");

})


//DisplayPanel in currentTODO
function displayPanel() {

    var elementPanel = document.getElementById("currentTODO");
    console.log("Print todo list");
    console.log(todoList);

    for (let element in todoList) {
        elementPanel.innerHTML +=
            `<section>
        <div class="panel">
            <div class="panel-heading">
                <h2>${todoList[element].todoTitle}</h2>
                <a class="delete">X</a>
            </div>
            <div class="panel-text">
            <p>${todoList[element].todoTime}</p>
            <p>${todoList[element].todoContent}</p>
            </div>
            <div class="panel-button">
                <button class="edit" id="editButton">Edit</button>
                <button class="complete" id="completeButton">Complete</button>
            </div>
        </div>

    </section>`
    }

}

//DisplayPanel in completeTODO
function displayComplete() {

    var elementPanel = document.getElementById("completeTODO");

    for (let element in doneList) {
        elementPanel.innerHTML +=
            `<section>
        <div class="panel">
            <div class="panel-heading">
                <h2><s>${doneList[element].doneTitle}</s></h2>
                <a class="delete">X</a>
            </div>
            <div class="panel-text">
            <p><s>${doneList[element].doneTime}</s></p>
            <p><s>${doneList[element].doneContent}</s></p>
            </div>
            <div class="panel-button">
                <button class="undo" id="undoButton">Undo</button>
            </div>
        </div>

    </section>`
    }

}


//hidePanel, when saved, close the panel, save the data and clear form
function hidePanel() {
    console.log("hidding panel");
    document.getElementById("addNewPanel").classList.add("hidden");
}


//closePanel, when press X and clears the data typed in
function clearPanel() {
    document.getElementById("closing").addEventListener('click', function (event) {
        console.log("closing clicked");
        console.log(event.value);
        document.getElementById("titleInput").innerText = "";
        document.getElementById("contentInput").innerText = "";
        document.getElementById("titleInput").value = "";
        document.getElementById("contentInput").value = "";
        hidePanel();
    })


}



//undo
function undoTask() {
    todoItems = document.getElementsByClassName("undo");
    let index = 0;

    //set index for each element
    for (let i = 0; i < todoItems.length; i++) {
        todoItems[i].addEventListener('click', function (event) {
            console.log("undo clicked at i:", i);
            console.log(event);

            //get current data and move to doneList
            tempList =
            {
                todoTitle: doneList[i].doneTitle,
                todoTime: doneList[i].doneTime,
                todoContent: doneList[i].doneContent
            }

            todoList.unshift(tempList);

            //remove current data from doneList
            doneList.splice(i, 1);

            //refresh
            refresh();
        })
    }
}
