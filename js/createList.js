(function () { 

    const lists = [
        {
            listId: 0,
            nameList: "lista zero",
            namesTasks: ["tarefa1", "tarefa2"]
        }
    ]

    document.addEventListener("DOMContentLoaded", loadPage);

    function loadPage() {
        const mainForm = document.getElementById("mainForm");
        mainForm.addEventListener("submit", submitForm)
        const addTaskBtn = document.getElementById("addTask");
        addTaskBtn.addEventListener("click", addTask)
        createListContent()
    }

    function getValues() {
        const nameList = document.getElementById("nameList").value
        const namesTasks = document.getElementById("namesTasks").value
        return {
            nameList: nameList,
            namesTasks: namesTasks
        }
    }

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
    
    function addTask() {
        console.log("add Task function")

        // if(document.getElementById("namesTasks").value) {
        //     return document.getElementById("namesTasks").value
        // } else {
        //     return
        // }
    }
})();

