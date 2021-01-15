'use strict';
//Функция принимает на вход текст и ...спам - слова (переменное количество аргументов).
//Определить по 5ти бальной шкале, как часто в тексте встречается спам.
//Результат вернуть из функции.

function checkSpam(text, ...spam){
    let counter = 0;
    for ( let word of spam) {
        if (text.split(' ').includes(word)) counter++;
        text.split(' ').splice(0, 1);
    }
    console.log(counter, text.split(' ').length);
    return Math.round(counter / (text.split(' ').length / 5));
}

let text = 'Функция принимает на вход текст и ...спам - слова (переменное количество аргументов). Определить по 5ти бальной шкале, как часто в тексте встречается спам. Результат вернуть из функции.';
let spam = ['спам', 'текст', 'на', 'принимает', 'и','...спам'];
console.log(checkSpam(text, ...spam));

//Написать функцию, которая принимает на вход массив фукций и число обрабатывает 
//число каждой функцией и возвращает true, если число прошло проверку всеми функциями и false, если нет

//Функции для проверки:
 let more18 = num => num > 18;//возвращает true, если переданный аргумент больше 18
 let less30 = num => num < 30;//возвращает true, если переданный аргумент меньше 30
 let arr = [more18, less30];
 
//Число для проверки:
 let age = Math.floor(Math.random() * 100);

 function checkNum(arr, num){
     let checkedFuncs = 0;
     for (let func of arr) {
         if (func(num)) checkedFuncs++;
         else checkedFuncs--;
     }
     if (checkedFuncs === arr.length) return true;
     else return false;
 }
 console.log(checkNum(arr, age));

 // ДЗ №3 ЗАДАНИЕ 5
 //Создать массив целых чисел произвольного размера.
//Найти в данном массиве такие два элемента, чтобы их сумма была равна 7.
//Найденные элементы и их индексы вывести в консоль.
//Для решения достаточно найти одну пару.
/**комментарий: 
 * можно было просто создать массив вручную. 
 * Потом перебирать его (с вложенным циклом)
 *  и поочередно смотреть равно ли: 0й + 1й === 7, 0й +2й === 7, 0й + 3й === 7 и тд */

let numArr = [1,2,3,4,5,89,78,411,1,2,5,3];
for (let i = 0; i < numArr.length; i++){
    let cycle = false;
    for(let i2 = 0; i2 <numArr.length; i2++){
        if(numArr[i] + numArr[i2] === 7) {
            console.log(numArr[i], numArr[i2], i, i2);
            cycle = true;
            break;
        }
    }
    delete numArr[i];
    if (cycle) break;
}
    


