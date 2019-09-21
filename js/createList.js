(function () { 

    const lists = []
    document.addEventListener("DOMContentLoaded", loadPage);

    function loadPage() {
        console.log("loadPage function")
        const mainForm = document.getElementById("mainForm");
        mainForm.addEventListener("submit", submitForm)
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
    }



})();


/*

funcoes

- ao clicar no botao
    - adicionar lista com tarefa
        - push no array de listas
        - array de listas deve ser carregado com a primeira lista
            - funcao de carregar o array de listas no inicializar da pagina
        - adicionar ao DOM


*/