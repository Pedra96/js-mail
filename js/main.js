let emails = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let useremail = document.getElementById("userEmail");
let flag;
let buttonContainer = document.getElementById("buttonContainer");


document.getElementById("bottone").onclick = emailCheck;
function emailCheck() {
    flag = false;
    document.getElementById("bottone").classList.remove("btn-danger");
    document.getElementById("bottone").classList.add("btn-primary");


    for (let i = 0; i <= emails.length; i++) {
        if (useremail.value == emails[i]) {
            flag = true;
            document.getElementById("buttonContainer").innerHTML = '<h2 class="mt-2">email trovata<h2>';
        } else if (flag == true) {
            console.log("email trovata");
            break;
        } else if (i == emails.length && flag == false) {
            buttonContainer.innerHTML = "email non trovata vuoi aggiungere la tua email?";
            buttonContainer.innerHTML += '<div><button onclick="addEmail(useremail.value)" type="button" class="btn btn-primary col-6 col-lg-1 m-2">Si</button><button onclick="addrefused()" type="button" class="btn btn-secondary col-6 col-lg-1 m-2">No</button></div>';

        } else if (useremail.value == "") {
            document.getElementById("bottone").classList.remove("btn-primary");
            document.getElementById("bottone").classList.add("btn-danger");
            break;
        }
    }
}

function addrefused() {
    document.getElementById("buttonContainer").innerHTML = '<h2 class="mt-2">Hai rifiutato ricaricare la pagina per controllare altre emails.<h2>';
}

function addEmail(usermail) {

    emails.push(usermail);
    console.log("email aggiunta " + emails[emails.length - 1]);
    buttonContainer.innerHTML += '<p class="m-0">email aggiunta</p>' + '<button onclick="printEmail(emails)" type="button" class="btn btn-primary col-6 col-lg-1 m-2">Printa lista email</button>';
}

function printEmail(array) {
    document.getElementById("buttonContainer").innerHTML += '<ul id=lista class="my.width"></ul>';
    for (let i = 0; i < array.length; i++) {
        document.getElementById("lista").innerHTML += "<li>" + array[i] + "</li>";
    }
}
