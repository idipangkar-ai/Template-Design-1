// Form Validation //

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form input fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Check if inputs are valid
    const isNameValid = validateInput(nameInput);
    const isEmailValid = validateInput(emailInput);

    // If inputs are valid, submit the form
    if (isNameValid && isEmailValid) {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
      };

      // Send form data to backend
      sendData(formData);
    }
  });

  // Function to validate input
  function validateInput(input) {
    const value = input.value.trim(); // Trim whitespace from input value
    const isValid = !!value; // Check if value is not empty

    // Update input styles based on validity
    if (isValid) {
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
    }

    return isValid;
  }

  // Function to send form data to backend
  function sendData(formData) {
    // Replace 'backend-url' with your actual backend endpoint URL
    const url = "backend-url";

    // Create and configure a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Convert form data to JSON format
    const jsonData = JSON.stringify(formData);

    // Define behavior for when the request completes
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Form data sent successfully!");
        // Optionally, handle successful response from backend
      } else {
        console.error("Error sending form data:", xhr.statusText);
        // Optionally, handle errors
      }
    };

    // Send the request with the form data
    xhr.send(jsonData);
  }
});
