const userInputField = document.getElementById('user-input');
    const userImage = document.getElementById('image-upload');
    // Function to clear the input field value
    function clearInputFields() {
      userInputField.value = '';
      userImage.value = '';
    }
    // Create a Clear Fields button dynamically
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Fields';
    clearButton.addEventListener('click', clearInputFields);
    // Append the Clear Fields button after the input field
    userImage.insertAdjacentElement('afterend', clearButton);
