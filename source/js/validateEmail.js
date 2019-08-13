const validateEmail = () => {
  document.querySelector('.subscribe__email').oninvalid = function () {
    this.setCustomValidity("Пожалуйста, укажите правильный E-mail");
  };
};

validateEmail()