const players = document.querySelector(".header");
const board = document.querySelector(".board");
const selectBoard = document.querySelector(".select");
let player;
const createElement = (ele) => {
  return document.createElement(ele);
};
// Creating Board
const drawBoard = () => {
  for (let i = 0; i < 9; i++) {
    const bd = createElement("div");
    bd.setAttribute("class", `box box${i + 1}`);
    board.append(bd);
  }
};
drawBoard();

// Set a level
const setLevel = () => {
  const selection = createElement("select");
  const options = ["Easy", "Medium", "Impossible", "Two Players"];
  for (let i = 0; i < options.length; i++) {
    const option = createElement("option");
    option.setAttribute("value", options[i]);
    selection.append(option);
    option.innerHTML = options[i];
  }
  selectBoard.append(selection);
};
setLevel();

// Set Player
const setPlayer = () => {
  const playersDropDown = createElement("select");
  playersDropDown.setAttribute("class", "select-player");
  const options = ["X", "O"];
  for (const opt in options) {
    const option = createElement("option");
    option.setAttribute("value", options[opt]);
    playersDropDown.append(option);
    option.innerHTML = options[opt];
  }

  selectBoard.append(playersDropDown);
};
setPlayer();

// Select a player
document
  .querySelector(".select-player")
  .addEventListener("change", (event) => (player = event.target.value));

// Get Box Click
const boxes = document.querySelectorAll(".box");
boxes.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (player) {
      e.target.innerHTML = player;
    }
  });
});
