const formValues = {}; // Сюда пишутся значения формы (Object как в Java, или dict из Python)
const formValidation = {}; // Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,
// то при обращении к Object вернётся undefined, который при логическом сравнении обрабатывается как false

// Объявляется и инициализируется константная переменная
// Инициализация функцией, заданной в стрелочном виде
export const validatePassword = (e) => {
  //Пароль должен содержать 8 символов и хотя бы одну цифру, одну букву и один уникальный символ
  const regExp = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  // Напишите код валидации здесь и присвойте true/false в объект(словарь) formValidation
  // formValidation.password = ...  // formValidation['password'] = ... - то же самое, но другой синтаксис
  const repassword = document.getElementById("password-repeat");
  repassword.classList.add("invalid");
  checkValidationStatus()
  if (String(e).match(regExp) !== null) {
    password.classList.remove("invalid");
    password.classList.add("valid");
    return true;
  } else {
    password.classList.remove("valid");
    password.classList.add("invalid");
    return false;
  }
};

export const checkValidationStatus = () => {
  const repassword = document.getElementById("password-repeat");
  if (
    !getValidationStatus() &&
    formValidation[email] !== null &&
    formValidation[password] !== null &&
    formValidation[repassword] !== null
  ) {
    sign_up_btn.disabled = false;
  } else {
    sign_up_btn.disabled = true;
  }
};

export const validateRepeatPassword = (e) => {
  const repassword = document.getElementById("password-repeat");
  checkValidationStatus()
  if (e === password.value) {
    repassword.classList.remove("invalid");
    repassword.classList.add("valid");
    return true;
  } else {
    repassword.classList.remove("valid");
    repassword.classList.add("invalid");
    return false;
  }
};

export const validateEmail = (e) => {
  // Создадим шаблон регулярного выражения. В нём применяются шаблонные строки
  // Гуглить по тегам: "шаблонные строки js", "регулярные выражения"
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    checkValidationStatus()

  return String(e).toLowerCase().match(regExp);
};

// Функция возвращающая true если все валидации пройдены, и false если хотя бы одна не пройдена
export const getValidationStatus = () => {
  // Происходит функциональная мгаия, читай строчку кода ниже как:
  // Получить значения (не ключи) из объекта, затем применить к каждому значению функцию двойного логического отрицания
  // (преобразование к булевому типу) и результаты всех применений это true, то вернуть true, иначе - false
  return Object.values(formValidation).every(
    (validationStatus) => !!validationStatus
  );
};

// Функция возвращающая которая ставит значение поля в форме по ключу
export const setFormValue = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue;
  if (validator !== undefined) {
    formValidation[valueKey] = validator(newValue);
  }
};

// Функция для обработки отправки формы регистрации
// В этой функции должен быть http запрос на сервер для регистрации пользователя (сейчас просто демонстрация)
export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT");
    return false;
  }
  console.log("FORM IS FINE");
  console.log(formValues);
  return true;
};

const SingInUsers = [
  { first_name: "admin", last_name: "admin", password: "1234" },
  { first_name: "admin", last_name: "admin", password: "admin" },
];

export const checkFirstName = (e) => {
  const first_name_si_id = document.getElementById("first_name_si");
  const last_name_si_id = document.getElementById("last_name_si");
  const password_si_id = document.getElementById("password_si");
  if (first_name_si_id.value !== '' && last_name_si_id.value !== '' && password_si_id.value !== '') {
    sign_up_btn_si.disabled = false;
  } else {
    sign_up_btn_si.disabled = true;
  }
}

export const submitSignInForm = () => {
  const first_name_si_id = document.getElementById("first_name_si");
  const last_name_si_id = document.getElementById("last_name_si");
  const password_si_id = document.getElementById("password_si");

  var find_first_name = false;
  var find_last_name = false;
  var find_password = false;
  for (let i in SingInUsers) {
    for (let j in SingInUsers[i]) {
      if (first_name_si_id.value === SingInUsers[i][j] && j === "first_name") {
        find_first_name = true;
      }
      if (last_name_si_id.value === SingInUsers[i][j] && j === "last_name") {
        find_last_name = true;
      }
      if (password_si_id.value === SingInUsers[i][j] && j === "password") {
        find_password = true;
      }
    }
  }
  if (!find_first_name) {
    first_name_si_id.classList.remove("valid");
    first_name_si_id.classList.add("invalid");
  } else {
    first_name_si_id.classList.remove("invalid");
    first_name_si_id.classList.add("valid");
  }
  if (!find_last_name) {
    last_name_si_id.classList.remove("valid");
    last_name_si_id.classList.add("invalid");
  } else {
    last_name_si_id.classList.remove("invalid");
    last_name_si_id.classList.add("valid");
  }
  if (!find_password) {
    password_si_id.classList.remove("valid");
    password_si_id.classList.add("invalid");
  } else {
    password_si_id.classList.remove("invalid");
    password_si_id.classList.add("valid");
  }
  if (find_first_name && find_last_name && find_password) {
    console.log("Sing in correct");
    return true;
  } else {
    console.log("Sing in not correct");
    return false;
  }
};
