let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // playerX playerO
let count = 0;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
   count++;

   let isWinner = checkWinner();

   if (count === 9 && !isWinner) {
    gameDraw();
   }
  });
});

const gameDraw = () => {
    msg.innerText = "Game was Draw";
    msg.Container.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    }

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    }

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
//   for (pattern of winPattern) {
//     console.log(patter[0], patter[1], patter[2]);
//     console.log(
//       boxes[pattern[0]].innerText,
//       boxes[pattern[1]].innerText,
//       boxes[pattern[2]].innerText
//     );
//   }

  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "" ) {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
            return true;
    }
  }
}
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);