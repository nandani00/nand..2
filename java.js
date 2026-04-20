
function completeTask(btn) {
    btn.innerText = "Completed";
    btn.style.background = "green";
}

function checkAnswer(ans) {
    let result = document.getElementById("result");
    if(ans) {
        result.innerText = "Correct!";
        result.style.color = "green";
    } else {
        result.innerText = "Wrong!";
        result.style.color = "red";
    }
}
