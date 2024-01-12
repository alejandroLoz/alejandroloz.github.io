
  checkValues();
function checkValues() {
 var htmlActions = "<div class='actions' id='custom-actions'><button style='color:#fff;background-color:#ccc;text-align:center;' id='clear' disabled>Clear fields</button></div>";
  !document.querySelector('.actions') ? document.querySelector('#custom-fields').innerHTML+=htmlActions : false;

  document.querySelector('#clear') && document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#inputText1').value = "";
    document.querySel
