checkValues();
function checkValues() {
  var htmlActions =
    "<div class='actions' id='custom-actions'><button style='color:#fff;background-color:#ccc;text-align:center;' id='clear' disabled>Clear fields</button></div>";
  !document.querySelector(".actions")
    ? (document.querySelector("#custom-fields").innerHTML += htmlActions)
    : false;

  document.querySelector("#clear") &&
    document.querySelector("#clear").addEventListener("click", () => {
      document.querySelector("#inputText1").value = "";
      document.querySelector("#inputFile1").value = "";
      updateButton();
    });

  document
    .querySelector("#inputText1")
    .addEventListener("change", () => updateButton());
  document
    .querySelector("#inputFile1")
    .addEventListener("change", () => updateButton());
}

function updateButton() {
  var someFieldHasValue = Array.from(
    document.querySelectorAll(".custom-inputs .line-input input")
  ).some((v, i) => v.value !== "");
  if (someFieldHasValue) {
    document
      .querySelector("#clear")
      .setAttribute("style", "background-color: #000");
    document.querySelector("#clear").removeAttribute("disabled");
  } else {
    document
      .querySelector("#clear")
      .setAttribute("style", "background-color: #ccc");
    document.querySelector("#clear").setAttribute("disabled", true);
  }
}
