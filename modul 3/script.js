// let user = {name: "Аня", age: 12, admin: true}

// console.log(user)

// console.log(user.admin)

// console.log(user.country)

// user.country = "Latvia"

// console.log(user.country)

// let games = ["fnaf", "Roblox", "Hello Neighbor"]

// console.log(games[2])



// console.log(5 + 5); 
// console.log(-6 + 5);
// console.log(-6 - 12);
// console.log(6 / 99);
// console.log(77 % 7);
// console.log(4 ** 5);
// console.log(12 * 16);

// console.log(1 / 0);

// console.log('это не число' / 12);

// const number = 42;
// const negativeNumber = -15;
// const bigNumber = 999999999999999n;
// const text = "Привет мир";
// const isTrue = true;
// const isFalse = false;
// const emptyvalue = null;
// let undefinedValue;

// const obj = {age: 25,name: "Алекс",isStudent: false};

// const array = [1, "Текст", true, null];

// console.log({ number, negativeNumber, bigNumber, text, isTrue, isFalse, emptyvalue, undefinedValue, obj, array });

// let user = prompt("Введи свой возраст")

// if(user === "pass981"){
//     alert("Вход выполнен!")
// }

// else{
//     alert("Не успех.")
// }

// if(user === "pass981"){
//     alert("Вход выполнен!")
// }

// else if(user === "tool81"){
//     alert("Выполнен вход с ограничениями!")
// }

// else{
//     alert("Нет доступа!")
// }

// if(user < 18){
//     alert("Привет, как дела?")
// }

// else if(user <= 35){
//     alert("Добрый день")
// }

// else if(user > 35){
//     alert("Доброго времени суток")
// }

// console.log(NaN < 5)

// console.log(NaN)

// if (-5 === "5"){
//     false
// }

// if (undefined <= null){
//     false
// }

// if (undefined === null){
//     false
// }


// let a = 1;

// if (a === 0) {
//     console.log('Верно');
// }

//  else {
//     console.log('Неверно');
// }


// let b = '1';

// if (b === '1') {
//     console.log('Верно');
// } 

// else {
//     console.log('Неверно');
// }


// let test = true; 

// if (test === true) {
//     console.log('Верно');
// }

// else {
//     console.log('Неверно');
// }


// let c = 1;

// if (c <= 0) {
//     console.log('Верно');
// }
    
// else {
//     console.log('Неверно');
// }


// console.log();

// let time = 13;

// if (time<6 || time > 21){
//     console.log("Спокойной ночи")
// }

// else if (time === 13){
//     console.log("Пора обедать")
// }

// else {
//     console.log("Планов нет")
// }


// let color = "greenа"

// switch(color){
//     case"green":
//     alert("Можно ехать")
//     break;

//     case"yellow":
//     alert("Притормози!")
//     break;

//     case"red":
//     alert("Остановись!")
//     break;

//     default:
//         alert("Светофор сломан")
// }

// function SayHello(name){
//     alert(`Привет${name}`)
//     alert(`Hello${name}`)
//     alert(`Bonjour${name}`)
// }

// SayHello("Anja")
// SayHello("Dima")


// let Say_Something = "Покаr"

// switch(Say_Something){
//     case"Привет":
//     alert("И тебе привет")
//     break;

//     case"Пока":
//     alert("И тебе пока")
//     break;

//     default:
//         alert("Я тебя не понял")
// }



// let text = prompt("Введите текст!")

// alert(text.trim().toUpperCase())

// let number = 1

// while(number<=50){
//     console.log(number)
//     number++
// }

// for(let num = 1; num<=50; num++){
//     console.log(num)
// }

let password = prompt("Введите пароль")

while(password!=="user12345"){
    alert("Пароль неверный!")
    password = prompt("Попробуйте снова.")
}

