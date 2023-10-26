let buttonEl = document.getElementById("jokeBtn");
let joketext = document.getElementById("jokeText");

function getjoke() {

    let options = {
        method: "get",
    }

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            joketext.textContent = data.value;
        })
}





buttonEl.onclick = function() {
    getjoke()
}