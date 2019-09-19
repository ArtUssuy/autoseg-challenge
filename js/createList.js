(function () { 

    const lists = [
        {
            tarefa: "1",
            tasks: [
                {
                    tarefa: "1"
                }
            ]
        }
    ]

    function createListsHtml(lists) {
        const firstList = document.getElementById("firstList")
        const firstTask = document.getElementById("firstTask")
    }




    const addListButton = document.getElementById("addList")
    const list2 = {
        tarefa: "5",
    }

    lists[0].tasks.push(list2)
    console.log(lists)
    function addListButtonClick() {
        const nameListInput = document.getElementsByClassName("nameList")
    }



})();