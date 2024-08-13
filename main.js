// let name = prompt('как тебя зовут')
// let age = +prompt('сколько тебе лет')
// let city = prompt('где ты живешь')

// alert('Привет, ' + name + ' ! Тебе ' + age + ' лет ! Ты живешь в '+ city +'e')

// let num1 = +prompt('введите первое число ')
// let num2 = +prompt('введите второе число ')
 
// if(num1 > num2 ){
// alert ('Первое число больше второго')
// }else if (num1 < num2){
// alert ('второе число больше первого')
// }else {
// alert('число равные')
// }

// let number = Math.floor(Math.random() * 11)
// let guess = +prompt('Угадай число от 1 до 10')

// if(number == guess){
//     alert('Поздравляю ты угадал')
// }else if (guess == 52){
// alert ('Санк-Петербург ')
// }else{
//     alert('Не угадал! Попробуй еще ')
// }

// let number = +prompt('Введите число')

// if(number % 2 == 0){
//     alert('четное')
// }else{
//   alert(' не четное') 
// }

// let multiply = (a, b) => {
//     alert(a * b)
// }
// a = +prompt('Введите первое число')
// b = +prompt('Введите второе число')
// multiply(a ,b)

// let user = {
//     name: prompt('Как тебя зовут'),
//     age: +prompt('сколько тебе лет')
// }
// console.log(user);
// let product = prompt ('Введите числа от 1 до 10')


// for(let i = 1;i <= 10; i++){

// }
// console.log(i);

let num1 = +prompt('Введите первое число')
let num2 = +prompt('Введите второе число')
let num3 = +prompt('Введите третье число')
 
let max = num1

if (num1 > num2) {
max = num2
}
if(num3 > max){
    max = num3
}
alert('максимальное число:' + max)