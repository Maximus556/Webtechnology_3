
// alert ("Image");
// alert("Hello world!");
// let name = "Max";
// alert(`Привет, ${name}`);
// let element = document.getElementById('el1');
// console.log(element);
// element.classList.add("active");
// let btn = document.getElementById('btn');
// function changeColor () {
//     let block1 = document.getElementsById('block1');
//     console.log(block1[0]);
//     let element = block1[0];
//     element.classList.add("activeBlock1");
// }

// // console.log(btn);
// btn.addEventListener('click', changeColor);


1) Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.

let nameWho = prompt("Введите Ваше имя", "");
alert("Привет, - " + nameWho + "!")


2) Перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.

let a = parseInt(prompt("Введите Ваш возраст: "));
switch(a) {
    case 18:
    alert('Вы совершеннолетний, все можно!');
    break;
    case 10:
    alert('Вам надо учить уроки!');
    break;
    case 30:
    alert('Ложитесь спать, завтра на работу');
    break;
    default: 
    alert('Мы не знаем что Вам делать');
}