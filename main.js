let square = document.querySelectorAll(".square");
let turn = "X";
function playTurn(square) {
  square.addEventListener("click", () => {
    if (square.textContent == "") {
      if (turn == "X") {
        square.textContent = "X";
        turn = "O";
      } else if (turn == "O") {
        square.textContent = "O";
        turn = "X";
      }
    } else {
      alert("Square is already full!");
    }
  });
}

function checkWinner(item) {
  item.addEventListener("click", () => {
    let sq1 = document.getElementById("1");
    let sq2 = document.getElementById("2");
    let sq3 = document.getElementById("3");
    let sq4 = document.getElementById("4");
    let sq5 = document.getElementById("5");
    let sq6 = document.getElementById("6");
    let sq7 = document.getElementById("7");
    let sq8 = document.getElementById("8");
    let sq9 = document.getElementById("9");
    let array = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9];
    if (
      //horizontal
      sq1.textContent != "" &&
      sq1.textContent == sq2.textContent &&
      sq2.textContent == sq3.textContent
    ) {
      alert(`${sq1.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      sq4.textContent != "" &&
      sq4.textContent == sq5.textContent &&
      sq5.textContent == sq6.textContent
    ) {
      alert(`${sq4.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      sq7.textContent != "" &&
      sq7.textContent == sq8.textContent &&
      sq8.textContent == sq9.textContent
    ) {
      alert(`${sq7.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      //vertical
      sq1.textContent != "" &&
      sq1.textContent == sq4.textContent &&
      sq4.textContent == sq7.textContent
    ) {
      alert(`${sq1.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      sq2.textContent != "" &&
      sq2.textContent == sq5.textContent &&
      sq5.textContent == sq8.textContent
    ) {
      alert(`${sq2.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      sq3.textContent != "" &&
      sq3.textContent == sq6.textContent &&
      sq6.textContent == sq9.textContent
    ) {
      alert(`${sq3.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      //diagonal
      sq1.textContent != "" &&
      sq1.textContent == sq5.textContent &&
      sq5.textContent == sq9.textContent
    ) {
      alert(`${sq1.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    } else if (
      sq3.textContent != "" &&
      sq3.textContent == sq5.textContent &&
      sq5.textContent == sq7.textContent
    ) {
      alert(`${sq3.textContent} WINS!`);
      array.forEach(function (item) {
        item.textContent = "";
      });
    }
  });
}

square.forEach(playTurn);
square.forEach(checkWinner);
