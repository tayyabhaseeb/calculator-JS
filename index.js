const buttons = document.querySelectorAll("button");
let inputValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    if (event.target.textContent === "AC") {
      inputValue = "";
      render();
    } else if (event.target.textContent === "←") {
      inputValue = inputValue.slice(0, -1);
      render();
    } else if (event.target.textContent === "=") {
      if (event.target.textContent.includes(".")) {
        inputValue = eval(inputValue).toFixed(2);
      } else {
        inputValue = eval(inputValue);
      }
      render();
    } else {
      inputValue += event.target.textContent;
      render();
    }
  });
});

function render() {
  document.getElementById("input").value = inputValue;
}
