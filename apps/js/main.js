const button = document.querySelector("button");
const input = document.querySelector("input");

// Fillers
const name = document.getElementById("name");
const honor = document.getElementById("honor");
const kata = document.getElementById("kata");
const rank = document.getElementById("rank");
const score = document.getElementById("score");

addEventListener("load", () => {
    fetch("https://www.codewars.com/api/v1/users/R4nn3r")
        .then((response) => response.json())
        .then((data) => {
            // Use the data to update page
            name.innerText = data.name;
            honor.innerText = data.honor;
            kata.innerText = data.codeChallenges.totalCompleted;
            rank.innerText = data.ranks.overall.name;
            score.innerText = data.ranks.overall.score;
        })
        .catch((error) => console.log(error));
});

button.addEventListener("click", (e) => {
    const userName = input.value.trim();
    if (userName.length == 0) return input.classList.add("error");

    input.classList.remove("error");
    fetch(`https://www.codewars.com/api/v1/users/${userName}`)
        .then((response) => response.json())
        .then((data) => {
            name.innerText = data.name;
            honor.innerText = data.honor;
            kata.innerText = data.codeChallenges.totalCompleted;
            rank.innerText = data.ranks.overall.name;
            score.innerText = data.ranks.overall.score;
        })
        .catch((error) => console.log(error));
});
