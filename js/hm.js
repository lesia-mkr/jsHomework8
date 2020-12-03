'use strict';
console.log('Занятие 7');
/*
*Объект для задач #1 и #2

    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };
Объект для задачи #3 и #4

    let books = [
        { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
        { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
        { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
        { author: 'Гончаров', title: 'Обломов', pageCount: 610},
        { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
        { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
        { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
    ];




Написать функцию getGoodsByPrice.

  Функция принимает на вход: from, to и obj:
     * from, to - числа, если переданы не числа, необходимо прервать работу функции;
     * obj - объект. 
  Функция возвращает новый объект с товарами из obj, стоимость которых находится в диапазоне (from;  to] */
let goods = {
    piano: {
        title: "Пианино",
            price: 3000,
            count: 25
        },
    guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
    drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
    flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
    harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
};

function getGoodsByPrice(from, to, obj){
    let goodsByPrice = {};
    for (let good in obj){
        if (obj[good].price > from && obj[good].price <= to) {
            let newGood = obj[good];
            goodsByPrice[good] = newGood;
        }
    }
    return goodsByPrice;
    
};


let fffffff = getGoodsByPrice(1000, 3000, goods);
console.log(fffffff);

/*Написать функцию getByTitle.

 Функция принимает на вход: title, countToCart и obj:
     * title - название товара, который хочет купить пользователь;
     * countToCart - кодичество товара, который хочет приобрести пользователь;
     * obj - объект.
     
 Необходимо найти товар с названием (title):
     если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
     вывести в консоль информацию, что данного товара достаточно на складе,
     если не позволяет, то вывести информацию об этом в консоль.    
 Если товар с названием (title) не был найден вывести сообщение об этом в консоль
 
 Функция ничего не возвращает.*/

 function getByTitle(title, countToCart, obj ){
     let success = false;
     for (let good in obj){
        if (obj[good].title === title && countToCart <= obj[good].count) {
             obj[good].count += countToCart;
             success = true
            console.log(`${obj[good].title} достаточно на складе`, obj[good].count);
        } else if (obj[good].title === title && countToCart > obj[good].count) {
            success = true;
            console.log(`${obj[good].title} not достаточно на складе`, obj[good].count);
        } 
     }
     if (success === false) console.log(`${title} is not found`)
 }

 getByTitle('Пианинfо', 38, goods);


 /*Написать функцию getBooks.

 Функция принимает на вход: автора и массив:
 Функция возвращает новый массив с книгами , в который войдут все книги указанного автора,
 если такого автора нет, вернуть пустой массив.*/

 let book = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];

function getBooks (author, books) {
    let bookBy = [];
    for (let item of books){
        if (item.author === author){
            bookBy.push(item.title)
        }
    }
    console.log(bookBy);
};
getBooks('Лермонтов',book);

console.log('fffffffffffffffffffffffffffffffffffff')
/**
 *   
 * Написать функцию sortByParam. Задача на метод 'sort' массива.

 Функция принимает на вход имя свойства и массив объектов.
 Функция сортирует объекты в массиве в порядке возрастания по указанному свойству. */

function sortByParam(name, array){
    let sortingByNums = (a, b) => a[name] - b[name];
    let sortingByLetters = (a, b) => a[name].localeCompare(b[name]);
    if (typeof array[0][name] === 'number') return array.sort(sortingByNums);
    else return array.sort(sortingByLetters);
    
}
let booksBypages = sortByParam('author',book);
console.log(booksBypages);

 /**рошлые дз, которые я кидала, но они не получили оценки в ведомости, так что копирую их сюда же, тк наверно они потерялись среди всего 
  * 
  * 
  * дз 5, та задача которую надо исправить 
 * 
 * условие:
 * 
 * Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, 
 * будет возвращать слово "товар" в нужно форме ("12 ", но "22 , "1 ", "97 товаров" и тд).
 * 
 * комментарий к моему решению : 
 * 1. если count равно 0, 20, 30 40 и тд функция будет возвращать undefined
2. let str = `${goods} товара`;
return str
можно заменить на
return `${goods} товара`;
и не забывайте про ;
 		
 */

function countGoods (goods){
    if ( 5<= goods && goods < 20) {
        return `${goods} товаров`;
    }  if (goods % 10 === 0){
        return `${goods} товаров `;
    }if ( goods % 10 === 1) {
        return `${goods} товар`;
    } if (goods % 10 === 2 || goods % 10 == 3 || goods % 10 === 4){
        return `${goods} товара`;
    } if ( 5 <= (goods % 10) && (goods % 10) <= 9) {
        return `${goods} товаров `;
    }
};

let result = countGoods(210);

console.log(result);

/*  п


дз 4, задача 1
Найти количество вхождений одной строки в другую. Например, строка "дом" встречается в строке "дом домик домой одомашненный" 4 раза */
let str = 'дом домик домой одомашненный дом дд ооо дом домик', s = 'дом';
let counter = 0, counter1 = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === s[0]) {
        for ( let i1 = 0; i1 < s.length; i1++) {
            if (str[i+i1] === s[i1]){
                counter1++;
            } if (counter1 === s.length){
                counter++;
                counter1 = 0;
            }
        } 
    }
};


console.log(counter);

/*

4 дз, задача 4 
Найдите самое длинное слово в предложении, при условии,
 что в предложении все слова разной длины 
 Например, в "в предложении все слова разной длины" самое длинное слово "предложении" */

str = 'в предложении все слова разной длины';
let word = '', word1 = '', word3='', n = 0, n2 = 0 ;
counter = 0;
for (let i = 0; i < str.length; i++){
    if (str[i] != ' '){
        counter += 1;
        word3 += str[i];
    } if (str[i] === ' '){
        n2 = counter;
        word1 = word3;
        counter = 0;
        word3 = '';
        if ( n2 > n){
            n = n2;
            word = word1;
        }
    }
};
console.log(n, word);



/**Функция range

Напишите функцию range, принимающую три аргумента:
  два обязательных: начало и конец диапазона,
  третий аргумент - необязательный (если он не передан, то равен единице) – шаг для построения массива.

Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9] */

function range( from, to, step = 1) {
    let nums = [];
    for (let i = from; i < to; i += step) {
        nums.push(i);
    }
    return nums;
};

let num = range(1, 29, 9);

console.log(num);

/**Дано целое положительное число N.
Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено). */
function getSum(n) {
    if (n === 0) return n;
    return (n % 10) + getSum((n - (n % 10)) / 10);
    
};

let l = getSum(1050665);
console.log(l);