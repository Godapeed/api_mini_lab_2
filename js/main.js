import {setFormValue, submitSignUpForm, validateEmail, validatePassword, validateRepeatPassword, submitSignInForm, checkFirstName} from "./utils.js"


////// ДЕМОНСТРАЦИОННЫЙ УЧАСТОК КОДА. На оценку не влияет, исключительно для саморазвития.

// Предлагаю "поиграться" с частями кода ниже, чтобы познакомиться с JS
// Получаем элемент и меняем его класс, который определеён в библиотеке стилей materialize
//const password = document.getElementById('password');
//password.classList.add("valid")
//password.classList.remove("valid")

// В браузере можно посмотреть, что из себя представляет документ
// (CTRL+SHIFT+i для открытия консоли и открыть вкладку "консоль", туда будет залогированно значение)

// Если запросить id, которого нет в DOM дереве - вернется undefined
// => надо быть осторожней: коллега может поменять id вашего элемента и упадёт !ВАШ! код
// const first_name = document.getElementById('first_name_invalid');
// first_name.oninput = (e) => validatePassword(e)

// Селекция по классу. Может пригодится, для того, чтобы упростить обработку полей в двух формах.
// Чтобы не делать кучу уникальных айди, можно определённым полям формы давать один класс и обрабатывать их в цикле
// const passwords = document.querySelectorAll('.password')
// console.log(passwords)
// for (const password of passwords) {
//   password.style.background = "red"
// }

////// КОНЕЦ ДЕМОНСТРАЦИОННОГО УЧАСТКА КОДА. Дальше код для оцениваемой части задания


// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const email_id = 'email'

const sign_in_link_id = 'sign_in_link'
const sign_up_form_id = 'sign_up_form'
// const sign_in_form_id = 'sign_in_form'  // Пригодится
const sign_up_btn_id = 'sign_up_btn'
const sign_in_form_id = 'sign_in_form'

const password_repeat_id = "password-repeat"

const first_name_si_id = "first_name_si"
const last_name_si_id = "last_name_si"
const password_si_id = "password_si"
const sign_up_btn_si_id = "sign_up_btn_si"

// Получаем элемент DOM-дерева по id и присваиваем значение аттрибуту oninput
// oninput вызывается с параметром "event" каждый раз, когда ввод меняется
// Значение, которое мы присваеваем этому аттрибуту - это функция, определённая в стрелочном стиле
// Гуглить по тегам "события JS", "onchange/oninput HTML", "стрелочные функции JS", ...

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => setFormValue(last_name_id, e.target.value)

const email = document.getElementById(email_id);
email.oninput = (e) => setFormValue(email_id, e.target.value, validateEmail) // Установить значение с валидацией

const password = document.getElementById(password_id);
password.oninput = (e) => setFormValue(password_id, e.target.value, validatePassword)

const repassword = document.getElementById(password_repeat_id);
repassword.oninput = (e) => setFormValue(password_repeat_id, e.target.value, validateRepeatPassword)

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.disabled = true;

const first_name_si = document.getElementById(first_name_si_id);
first_name_si.oninput = (e) => setFormValue(first_name_si_id, e.target.value, checkFirstName)

const last_name_si = document.getElementById(last_name_si_id);
last_name_si.oninput = (e) => setFormValue(last_name_si_id, e.target.value, checkFirstName)

const password_si = document.getElementById(password_si_id);
password_si.oninput = (e) => setFormValue(password_si_id, e.target.value, checkFirstName)

const sign_up_btn_si = document.getElementById(sign_up_btn_si_id);
sign_up_btn_si.disabled = true;

// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становистя невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}


sign_up_btn.onclick = (e) => {
  // При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
  // Чтобы отключить его, нужно отменить стандартное поведение события
  e.preventDefault()
  submitSignUpForm()
}

sign_up_btn_si.onclick = (e) => {
  e.preventDefault()
  submitSignInForm()
}