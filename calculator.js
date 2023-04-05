let inpone = document.getElementById("firstinp");
let secone = document.getElementById("secondinp");
let result = document.getElementById("result");

let restartbtn = document.getElementById("clear");
restartbtn.onclick = function() {
    inpone.value = "";
    secone.value = "";
    result.textContent = "";
    
}

function add() {

    let result = document.getElementById("result");

    let res = parseInt(inpone.value) + parseInt(secone.value);

    result.textContent = res;
    if (result.textContent === "NaN") {
        result.textContent = "ERROR";
        result.style.color = "red";

    } else if (inpone.value === "" && secone.value === "") {
        result.textContent = "ERROR";

    }

}

function sub() {
    let res = parseInt(inpone.value) - parseInt(secone.value);
    let result = document.getElementById("result");
    result.textContent = res;
    if (result.textContent === "NaN") {
        result.textContent = "ERROR";
        result.style.color = "red";

    }



}

function div() {
    let res = parseInt(inpone.value) / parseInt(secone.value);
    let result = document.getElementById("result");
    result.textContent = res;
    if (result.textContent === "NaN") {
        result.textContent = "ERROR";
        result.style.color = "red";

    }


}

function mul() {
    let res = parseInt(inpone.value) * parseInt(secone.value);
    let result = document.getElementById("result");
    result.textContent = res;
    if (result.textContent === "NaN") {
        result.textContent = "ERROR";
        result.style.color = "red";

    }


}