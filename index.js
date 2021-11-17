let addMessage = document.querySelector("input");

let toDoList = [];

let newToDoList = {
    toDo: addMessage.value,
    checked: false,
    importent: false
};

function addDataWithButton() {
    toDoList.push(newToDoList);
    displayMessage();
}

function displayMessage() {
    toDoList.forEach(function (item, index) {
        let displayConsol = `Inf: ${addMessage.value}`
        console.log(displayConsol);

        let toDoContayner = document.getElementById("toDoContayner");
        toDoContayner.firstElementChild.style.visibility = 'visible';

        let text_elem = document.querySelector('.text_elem');


       /* let span = document.querySelector('span');
        span.innerText = addMessage.value;*/

        let spann = document.createElement('span');
        let p = document.createElement('p');
        spann.innerText = addMessage.value;
        text_elem.append(spann);
        text_elem.append(p);
        spann++;
    })
}
