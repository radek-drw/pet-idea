document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fields = [
    { id: "name", errorClass: "error-name", inputClass: "name-input" },

    {
      id: "email",
      errorClass: "error-email",
      inputClass: "email-input",
      pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    },

    { id: "message", errorClass: "error-message", inputClass: "message-input" },
  ];

  let formIsValid = true;

  fields.forEach((field) => {
    const value = document.getElementById(field.id).value;
    const inputElement = document.querySelector(`.${field.inputClass}`);
    const errorElement = document.querySelector(`.${field.errorClass}`);

    if (value === "" || (field.pattern && !field.pattern.test(value))) {
      inputElement.style.borderColor = "#ff0000";
      inputElement.style.backgroundColor = "#ffeeee";
      errorElement.style.display = "block";
      formIsValid = false;
    } else {
      inputElement.style.borderColor = "#d1d1d1";
      inputElement.style.backgroundColor = "transparent";
      errorElement.style.display = "none";
    }
  });

  if (formIsValid) {
    // Clear the input fields

    fields.forEach((field) => {
      const inputElement = document.querySelector(`.${field.inputClass}`);
      inputElement.value = "";
    });

    // Display the success message

    const successMessage = document.querySelector(".success-message");
    successMessage.style.display = "block";

    // Hide the success message after 3 seconds

    setTimeout(function () {
      successMessage.style.display = "none";
    }, 3000);
  } else {
    return false;
  }
});
