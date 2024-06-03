// Creating Board
const board = document.querySelector(".board");
const createElement = (ele) => {
  return document.createElement(ele);
};

const drawBoard = () => {
  for (let i = 0; i < 9; i++) {
    const bd = createElement("div");
    bd.setAttribute("class", `box box${i + 1}`);
    board.append(bd);
  }
};
drawBoard();

// Set a level
const level = document.querySelector(".select");
const drawDropDown = () => {
  const selection = createElement("select");
  const options = ["Easy", "Medium", "Impossible", "Two Players"];
  for (let i = 0; i < 4; i++) {
    const option = createElement("option");
    option.setAttribute("value", options[i]);
    selection.append(option);
    option.innerHTML = options[i];
  }
  level.append(selection);
};
drawDropDown();
