(function() {

  const customFields = document.getElementById('customFields');

  const customTextField = document.getElementById('customText');

  const customImageField = document.getElementById('fileInput');

  const clearFieldsButton = document.createElement('button');

  clearFieldsButton.classList.add('button', 'button--full-width', 'button--secondary');

 

  clearFieldsButton.innerText = 'Clear fields';

  customFields.appendChild(clearFieldsButton);

  clearFieldsButton.addEventListener('click', () => {

    customTextField.value = "";

    customImageField.value = "";

  })

  function makeDisabled() {

    if (customTextField.value == "" && customImageField.value == "") {

      clearFieldsButton.disabled = true;

    } else {

      clearFieldsButton.disabled = false;

    }

  }

  // Check if fields are empty and disable the button

  customTextField.addEventListener('keydown', () => makeDisabled())

  customImageField.addEventListener('change', () => makeDisabled())

  clearFieldsButton.disabled = true;

})()
