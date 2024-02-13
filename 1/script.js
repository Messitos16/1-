document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const urlValidationResult = document.getElementById("urlValidationResult");
  const emailValidationResult = document.getElementById("emailValidationResult");

  textInput.addEventListener("input", () => {
      const inputValue = textInput.value;

      if (isURL(inputValue)) {
          urlValidationResult.textContent = "Valid URL";
          urlValidationResult.style.color = "green";
      } else {
          urlValidationResult.textContent = "Invalid URL";
          urlValidationResult.style.color = "red";
      }

      if (isEmail(inputValue)) {
          emailValidationResult.textContent = "Valid Email";
          emailValidationResult.style.color = "green";
      } else {
          emailValidationResult.textContent = "Invalid Email";
          emailValidationResult.style.color = "red";
      }
  });

  function isURL(text) {
      const urlRegex = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
      return urlRegex.test(text);
  }

  function isEmail(text) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(text);
  }
})