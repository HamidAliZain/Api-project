const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");

const generateJoke = () => {
  const header = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", header)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.joke;
    })
    .catch((error) => {
      jokes.innerHTML = "Not responding";
    });
};

jokebtn.addEventListener("click", generateJoke);
generateJoke();
