console.log('*************loading script from shs script tag******************');
var existingButton = document.getElementById('custom-name').parentNode;
var input = document.createElement("input");
input.id = "clear-fields";
input.type = "button";
input.value = "clear fields"; 
input.disabled = "true";
existingButton.parentNode.insertBefore(input, existingButton.nextSibling);



document.getElementById('clear-fields').setAttribute("disabled","true");

document.getElementById('custom-name').oninput = () => {  
  document.getElementById('clear-fields').removeAttribute("disabled");
}

document.getElementById('custom-file').oninput = () => {
  document.getElementById('clear-fields').removeAttribute("disabled");
}

document.getElementById('clear-fields').onclick = () => {
  document.getElementById('custom-name').value = "";
  document.getElementById('custom-file').value = "";
  document.getElementById('clear-fields').setAttribute("disabled","true");
}
