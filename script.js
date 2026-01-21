const form = document.querySelector('.form__form');
const emailInput = document.querySelector('.form__input');
const errorMessage = document.getElementById("email-error");
const successSection = document.querySelector(".success");
const formSection = document.querySelector(".form");
const successEmail = document.querySelector('.success__email');
const container = document.querySelector('.container');

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    successEmail.textContent = email;
    formSection.classList.add("hidden");
    successSection.classList.remove("hidden");
    container.classList.add("container--success");
    emailInput.value = "";
    emailInput.classList.remove("form__input--error");
    errorMessage.style.display = "none";
  } else {
    emailInput.classList.add("form__input--error");
    errorMessage.style.display = "block";
  }
});

const dismissButton = document.querySelector('.success__button');
if(dismissButton) {
    dismissButton.addEventListener('click', () => {
        successSection.classList.add("hidden");
        formSection.classList.remove("hidden");
        container.classList.remove("container--success");
    });
}