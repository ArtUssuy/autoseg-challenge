(function () { 
    
/* FUNCTION AND VARIABLES ON LOAD *************************************************************** */ 

    // TRIGGER FUNCTION ON DOM LOAD
    document.addEventListener("DOMContentLoaded", loadPage);

    // VARIABLE THAT STORES LISTS AND TASKS
    const lists = [
        {
            listId: 0,
            nameList: "Primeira Lista",
            namesTasks: ["Tarefa 01", "Tarefa 02"]
        }
    ]

    // FUNCTIONS TRIGGERED WHEN DOM IS LOADED
    function loadPage() {
        mainFormSubmit()
        createListContent()
        createInputTaskDom()
        addListenerDeleteTask()
        addListenerDeleteList()
    }

    function addListenerDeleteTask() {
        const deleteTaskButtons = document.querySelectorAll("button.delete-task")
        deleteTaskButtons.forEach((deleteTaskButton) => {
            deleteTaskButton.addEventListener("click", deleteTask);
        });
    }

    function addListenerDeleteList() {
        const deleteListsButtons = document.querySelectorAll("button#deleteList")
        deleteListsButtons.forEach((deleteListButton) => {
            deleteListButton.addEventListener("click", deleteList);
        });
    }

    // CREATE CONTENT TO LIST OF LISTS AND TASKS
    function createListContent() {
        const newListDom = lists.map(a => {
            return `<div class="list-wrapper" id="list-wrapper">
                        <div class="list">
                            <div class="list-details-wrapper">
                                <img src="" alt="">
                                <span id="listName">${a.nameList}</span>
                            </div>

                            <div class="list-button-wrapper ">
                                <button id="editList" class="edit-list" >
                                    <img src="/media/assets/icone_editar.png" alt="Editar lista">
                                </button>
                                <button id="deleteList" class="delete-list"" >
                                    <img src="/media/assets/icone_deletar_lista.png" alt="Excluir lista">
                                </button>
                            </div>
                        </div>
                        ${a.namesTasks.map((c) => {
                            return `<div class="tasks">
                                <div class="task-details-wrapper">
                                    <span id="taskName">${c}</span>
                                </div>

                                <div class="task-button-wrapper">
                                    <button id="deleteTask" class="delete-task"" >
                                        <img src="/media/assets/icone_deletar_lista.png" alt="Excluir tarefa">
                                    </button>
                                </div>
                            </div>`
                        }).join('')}
                    </div>`
        }).join('')
        document.getElementById("lists-wrapper").innerHTML = newListDom
        addListenerDeleteList()
    }

    // ADD LISTENER TO MAIN FORM SUBMIT
    function mainFormSubmit() {
        const mainForm = document.getElementById("mainForm");
        mainForm.addEventListener("submit", submitForm)
    }

    // CREATE FIRST INPUT INSIDE DOM
    function createInputTaskDom() {
        const firstInputDom = `<div class="add-task-wrapper">
                                    <input required="required" value="" placeholder="Adicionar tarefa" type="text" class="namesTasks" id="namesTasks">
                                    <button class="addTask" id="addTask" type="button">
                                        <img id="addTask-icon" src="/media/assets/botao_adicionar.png" alt="">
                                    </button>
                                </div>`
            

        document.getElementById("add-task-container").innerHTML = firstInputDom
        addFunctionToLastInput()
    }

/* INPUT TASKS FUNCTIONS ************************************************************************ */ 

    // ADD INPUT TASK TO DOM
    function addTask() {
        newInputDom = document.getElementById("add-task-container").lastChild.cloneNode(true)
        newInputDom.firstElementChild.value = ""
        document.getElementById("add-task-container").appendChild(newInputDom)
        addFunctionToLastInput()
        addListenerDeleteTask()
    }

    // DELETE TASK FROM DOM AND FROM ARRAY LISTS
    function deleteTask(e) {

        e.path.map((path) => {
            if(path.className === "tasks") {
                const spanTaskName = path.firstElementChild.lastElementChild.textContent
                lists.map(listTaskName => {
                    listTaskName.namesTasks.map((nameTask, b) => {
                        if (nameTask === spanTaskName) {
                            path.remove()
                            listTaskName.namesTasks.splice(b, 1)
                        }
                    })
                })
            }
        })
        console.log(lists)
    }

    // ADD LISTENER ALWAYS TO THE LAST TASK INPUT
    function addFunctionToLastInput() {
        const addTaskBtn = document.getElementsByClassName("addTask");
        addTaskBtn[addTaskBtn.length-1].addEventListener("click", addTask)
    }

/* LIST ADD FUNCTIONS ************************************************************************ */ 

    // MAIN FORM SUBMIT FUNCTION
    function submitForm(e) {
        e.preventDefault()
        const newList = {
            listId: lists.length + 1,
            nameList: getValues().nameList,
            namesTasks: getValues().namesTasks
        }
        lists.push(newList)
        createListContent()
        addListenerDeleteTask()
    }

    // RETURN VALUES FROM MAIN FORM
    function getValues() {
        const namesTasks = []
        const nameList = document.getElementById("nameList").value

        for(nameTask of document.getElementsByClassName("namesTasks")) {
            namesTasks.push(nameTask.value)
        }

        return {
            nameList,
            namesTasks
        }
    }

    function deleteList(e) {
        e.path.map((path) => {
            if(path.className === "list-wrapper") {
                lists.map((list, b)=> {
                    if (list.nameList == path.firstElementChild.firstElementChild.lastElementChild.textContent) {
                        lists.splice(b, 1)
                        path.remove()
                    }
                })

            }
        })
    }
})();


/*

- IMPLEMENTAR FUNCAO PARA DELETAR LISTA
- IMLEMENTAR FUNCAO PARA EDITAR NOME DA LISTA


*/