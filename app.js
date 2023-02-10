const title = document.querySelector("#title");
const input = document.querySelector("#input");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const select = document.querySelector("#select");
const modalBtn = document.querySelector(".modalBtn");
const reset = document.querySelector(".reset");
const para = document.querySelector(".para");

//
let randomWord;
let timeout = 10;
let scoreNum = 0;
let easyTime = 5;

reset.addEventListener("click", () => {
     modalBtn.classList.add("hidden");
});
select.addEventListener("change", () => {
     easyTime = Number(select.value);
});
//
function generateRandomWord() {
     let randomNumber = Math.trunc(Math.random() * words.length);
     title.textContent = words[randomNumber];
     randomWord = words[randomNumber];
}

generateRandomWord();

input.addEventListener("input", () => {
     if (input.value == randomWord) {
          generateRandomWord();
          input.value = "";
          scoreNum++;
          score.textContent = scoreNum;
          timeout += easyTime;
     }
});

setInterval(() => {
     if (timeout !== 0) {
          timeout--;
          time.textContent = timeout < 10 ? `00:0${timeout}` : `00:${timeout}`;
     } else {
          timeout = 10;
          modalBtn.classList.remove("hidden");
          para.textContent = `Score: ${scoreNum}`;
     }
}, 1000);
