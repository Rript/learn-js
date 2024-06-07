// Задача 1: Уведомления
// Создайте функцию notify, которая принимает три параметра: сообщение и две функции колбэк. Если пользователь подтверждает сообщение, вызывается первая функция колбэк, если нет - вторая.

function notify(message, yes, no) {
    if(confirm(message)) yes()
    else no();
}

function showOk() {
    alert("Вы согласны");
}

function showCancel() {
    alert("Вы не согласны");
}

notify("Вы согласны?", showOk, showCancel);

// Задача 2: Обработка данных
// Создайте функцию processData, которая принимает три параметра: массив данных и две функции колбэк. Первая функция колбэк обрабатывает данные (например, выводит каждый элемент в консоль), вторая функция колбэк вызывается, если массив пустой.

function processData(nabor, full, emtry) {
    if (!nabor.length) emtry()
    else nabor.forEach(full);
}

function okey(fruits) {
    alert(fruits);

}

function Not() {
    alert('Данных нет');
}
let arr = [];
processData(arr, okey, Not);

// Задача 3: Авторизация
// Создайте функцию authorize, которая принимает три параметра: имя пользователя, пароль и две функции колбэк. Если имя пользователя равно "admin" и пароль "1234", вызывается первая функция колбэк, в противном случае вторая.

function authorize(userName, userPass, callback1, callback2) {
    if (userName === "admin" && userPass === "1234") callback1();
    else callback2();
};

function authOk(){
    alert('Вы победили')
}

function authNO() {
    alert("постарайтесь еще")
}

let name = prompt('введите логин');
let pass = prompt('Введите пароль');

authorize(name, pass, authOk, authNO);




// Задача 4: Обработка событий
// Создайте функцию handleEvent, которая принимает два параметра: событие и функцию колбэк. Если событие равно "click", функция колбэк вызывается, в противном случае выводится сообщение об ошибке.

function handleEvent(event, callback) {
    if (event == "click") callback()
    else alert("Error");
    }
    
    function accept() {
    alert("okey");
    }
    let parametr = prompt()
    handleEvent(parametr, accept);

// Задача 5: Таймер
// Создайте функцию startTimer, которая принимает два параметра: время в миллисекундах и функцию колбэк. Функция должна вызвать колбэк по истечении заданного времени.

function startTimer(miliSecond, callback) {
    setTimeout(callback, miliSecond);
   }
   
   function callback() {
   alert("you win");
   }
   
startTimer(2000, callback);
