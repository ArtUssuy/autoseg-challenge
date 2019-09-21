(function () { 

    const lists = []
    document.addEventListener("DOMContentLoaded", loadPage);

    function loadPage() {
        console.log("loadPage function")
        const buttonAddList = document.getElementById("addBUttonList");
        buttonAddList.addEventListener("click", addListButtonClick)
    } 

    function getValues() {
        const nameList = document.getElementById("nameList").value
        const namesTasks = document.getElementById("namesTasks").value
        return {
            nameList: nameList,
            namesTasks: namesTasks
        }
    }

    function addListButtonClick() {
        const newList = {
            listId: lists.length + 1,
            nameList: getValues().nameList,
            namesTasks: getValues().namesTasks
        }
        lists.push(newList)
        console.log(lists)
    }



})();


/*

funcoes

- ao clicar no botao
    - adicionar lista com tarefa
        - push no array de listas
        - array de listas deve ser carregado com a primeira lista
            - funcao de carregar o array de listas no inicializar da pagina


    - verificar se o nome da lista foi digitado
    - verificar se o nome da tarefa foi digitado
    - 

*/