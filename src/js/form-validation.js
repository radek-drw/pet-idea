const fields = [
  {
    id: "name",
    errorClass: "error-name",
    inputClass: "name-input",
  },
  {
    id: "email",
    errorClass: "error-email",
    inputClass: "email-input",
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  },
  {
    id: "message",
    errorClass: "error-message",
    inputClass: "message-input",
  },
];

const ERROR_MESSAGES = {
  NO_INTERNET: "Brak połączenia z internetem!",
  FORM_SEND_ERROR:
    "Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie później.",
  RESOURCE_NOT_FOUND: "Żądany zasób nie został znaleziony.",
  SERVER_ERROR:
    "Wystąpił wewnętrzny błąd serwera. Proszę spróbować ponownie później.",
  UNEXPECTED_ERROR:
    "Wystąpił nieoczekiwany błąd. Proszę spróbować ponownie później.",
};

const form = document.getElementById("myForm");
const loader = document.getElementById("loader");
const loadingOverlay = document.getElementById("loading-overlay");
const successMessage = document.querySelector(".success-message");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!navigator.onLine) {
    showErrorToast(ERROR_MESSAGES.NO_INTERNET);
    return;
  }

  if (validateForm()) {
    toggleLoading(true);
    try {
      const formData = new FormData(form);
      const response = await fetch("/send_email", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        handleSuccessResponse();
      } else {
        handleServerError(response.status);
      }
    } catch (error) {
      handleError(error);
    } finally {
      toggleLoading(false);
    }
  }
});

function validateForm() {
  let formIsValid = true;
  fields.forEach((field) => {
    const value = document.getElementById(field.id).value;
    const errorElement = document.querySelector(`.${field.errorClass}`);
    const inputElement = document.querySelector(`.${field.inputClass}`);

    if (value === "" || (field.pattern && !field.pattern.test(value))) {
      showError(inputElement, errorElement);
      formIsValid = false;
    } else {
      hideError(inputElement, errorElement);
    }
  });
  return formIsValid;
}

function toggleLoading(isLoading) {
  const display = isLoading ? "block" : "none";
  loadingOverlay.style.display = display;
  loader.style.display = display;
}

function handleSuccessResponse() {
  form.reset();
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 4000);
}

function showErrorToast(message) {
  toast.style.display = "block";
  toast.textContent = message;
  setTimeout(() => {
    toast.style.display = "none";
  }, 8000);
}

function handleServerError(status) {
  let message = ERROR_MESSAGES.FORM_SEND_ERROR;
  if (status === 404) {
    message = ERROR_MESSAGES.RESOURCE_NOT_FOUND;
  } else if (status >= 500) {
    message = ERROR_MESSAGES.SERVER_ERROR;
  }
  showErrorToast(message);
}

function handleError(error) {
  console.error("Error:", error);
  showErrorToast(ERROR_MESSAGES.UNEXPECTED_ERROR);
}

function showError(inputElement, errorElement) {
  errorElement.style.display = "block";
  errorElement.setAttribute("aria-live", "assertive");
  inputElement.style.borderColor = "#ff0000";
  inputElement.style.backgroundColor = "#ffeeee";
}

function hideError(inputElement, errorElement) {
  errorElement.style.display = "none";
  inputElement.style.borderColor = "#d1d1d1";
  inputElement.style.backgroundColor = "transparent";
}
