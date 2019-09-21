(function () { 
    
    document.addEventListener("DOMContentLoaded", loadPage);

    const lists = [
        {
            listId: 0,
            nameList: "lista zero",
            namesTasks: ["tarefa1", "tarefa2"]
        }
    ]

    const inputsTasksArray = []

    // FUNCTION TRIGGERED WHEN DOM IS LOADED
    function loadPage() {
        mainFormSubmit()
        
        createListContent()
        createInputTaskDom()
    }

    // CREATE FIRST INPUT INSIDE DOM
    function createInputTaskDom() {
        const firstInputDom = `<div class="add-task-wrapper">
                                    <input value="" placeholder="Adicionar tarefa" type="text" class="namesTasks" id="namesTasks">
                                    <button class="addTask" id="addTask" type="button">
                                        <img id="addTask-icon" src="/media/assets/botao_adicionar.png" alt="">
                                    </button>
                                </div>`
            

        document.getElementById("add-task-container").innerHTML = firstInputDom
        addFunctionToLastInput()
    }

    // ADD INPUT TASK DOM AND VALUES
    function addTask() {
        newInputDom = document.getElementById("add-task-container").lastChild.cloneNode(true)
        newInputDom.firstElementChild.value = ""
        document.getElementById("add-task-container").appendChild(newInputDom)
        addFunctionToLastInput()
    }

    // ADD LISTENER TO MAIN FORM SUBMIT
    function mainFormSubmit() {
        const mainForm = document.getElementById("mainForm");
        mainForm.addEventListener("submit", submitForm)
    }

    // RETURN VALUES FROM MAIN FORM
    function getValues() {
        const nameList = document.getElementById("nameList").value
        const namesTasks = document.getElementById("namesTasks").value
        getValuesFromTasksInputs()
        return {
            nameList: nameList,
            namesTasks: namesTasks
        }
    }

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
    }

    // CREATE CONTENT TO LIST OF LISTS
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
                                    <img src="" alt="">
                                </button>
                                <button id="deleteList" class="delete-list"" >
                                    <img src="" alt="">
                                </button>
                            </div>
                        </div>

                        <div class="tasks">
                            <div class="task-details-wrapper">
                                <input type="checkbox">
                                <span id="taskName">${a.namesTasks}</span>
                            </div>

                            <div class="task-button-wrapper">
                                <button id="editList" class="edit-list" >
                                    <img src="" alt="">
                                </button>
                                <button id="deleteList" class="delete-list"" >
                                    <img src="" alt="">
                                </button>
                            </div>
                        </div>
                    </div>`
            
        })
        document.getElementById("lists-wrapper").innerHTML = newListDom
    }

    // ADD LISTENER ONLY TO THE LAST TASK INPUT
    function addFunctionToLastInput() {
        const addTaskBtn = document.getElementsByClassName("addTask");
        addTaskBtn[addTaskBtn.length-1].addEventListener("click", addTask)
    }

    // RETURN VALUES FROM THE TASKS INPUTS
    function getValuesFromTasksInputs() {
        const taskInputs = document.getElementsByClassName("namesTasks")
        console.log(taskInputs)
    }

})();

/*
- criar novo input a cada click
    - mover o botao de + para o ultimo input
- funcao de criar nova task deve ser movida para o ultimo input
*/