// Комментарий для скриптов - однострочный
/*Многострочный комментарий*/
// document.write('Для выведения екста'); //document объект предназначен для подклчения библиотеки, write для выведения текста на страницу
console.log('Выведение в консоль'); //объект для выведения в консоль, метод log для выведения в консоль 
console.info('Вывдение текста в консоль как инфо'); //объект для выведения в консоль, метод info для выведения в консоль как инфо 
console.error('Выведение информации в консоль в виде ошибки'); //объект для выведения в консоль, метод error для выведения в консоль как ошибку
console.warn('Выведение оповещение'); //объект для выведения в консоль, метод warn для выведения в консоль как уведомление внимание

//СОЗДАНИЕ И РАБОТА С ПЕРЕМЕННЫМИ
// строки обязательно завершаются точкой с запятой
var number; //объявление переменной
number = 10; //вариант присвоения значения переменной

var num = 10; //вариант присвоения значения переменной
console.log('Переменная: ' + num + '.'); //Объединение текста и переменной в одну строку

num = 8 //Переопределение значения переменной
console.log('Переменная: ' + num + '.');

const numer = 1; //Объявление константы и присвоение ей значения. Константу нельза далее переопределить
console.log('Переменная: ' + numer + '.');

var num_1 = 5; //автоматическое определение типа переменной (число и строка)
var num_2 = '5';

// МАТЕМАТИЧЕСКИЕ ДЕЙСТВИЯ

var num_1 = 5;
var num_2 = 10;
var res = num_2 - num_1;
console.log('Результат:' + res);
console.log('Результат:' + (num_1 - num_2)); //выполнение математических действий (-;+;/;*;%)

var num_3 = 3;
num_3 +=7; // сокращенные математические действия
console.log('Результат:' + num_3);

var num_4 = 2;
num_4++; //прибавление 1
console.log('Результат:' + num_4);

var str_1 = '1';
var str_2 = '2';
console.log('Результат:' + (str_1 + str_2)); //конкотенация строк
var str_1 = Number('1');
var str_2 = Number('2'); // Переопределение типа переменной
console.log('Результат:' + (str_1 + str_2)); 

//Встроенные методы
//Объект Math - библиотека математических функций
console.log('Math:' + Math.abs(str_1 + str_2));
console.log('Math:' + Math.PI);
console.log('Math:' + Math.min(1,2,10,15,-2));

//УСЛОВНЫЕ КОНСТРУКЦИИ

var number = 15;

if(number > 5) {       //условные знаки >; <; >=; <=; != 
    console.log('Условие верное'); // если условие одно, то фигурные скобки можно не прописывать
} else if(number < 5) {
    console.log('Второе условие верное');
} else {               // условие если основное условие не верно
    console.log('Условие не верное');
}

var isHasHouse = true;
if(number == 5 || isHasHouse==true){ //Операторы || - или; && - и
    console.log('Условие верное');  //Для проверки булевого значения можно указать на True -'isHasHouse' на False -'!isHasHouse'
} else {
    console.log('Условие не совпало');
}

var stroka = 'word';
switch(stroka){ // Проверка переменной на множество различных условий только равенство
    case '4': console.log('Переменная со значением 4');
    break;
    case 'word': console.log('Переменная со значением word');
    break;
    default:
        case 'word': console.log('Переменная со значением default'); //аналог else
}

//МАССИВЫ ДАННЫХ

var arr = new Array(); //1-й вариант создания массива
var arr = []; //2-й варант создания массива

var arr = [5, 10, true, 'text', 2.5];
console.log('Массив' + arr);
console.log('Первое значение массива ' + arr[0]); //получаем 1-й элемент массива
console.log('Длина массива ' + arr.length); //получаем размер массива

//многомерные массивы
var matrix = [
    [1, 2, 3], 
    ['q', 'w', 'e'], 
    [4, true, 'r']  
];
matrix[1][1] = 'text'
console.log('Измененный многомерный массив ' + matrix);

//ЦИКЛЫ

for(var i = 0; i < 5; i++){ //создание цикла for (переменная, условие, действие с переменной на каждом последующем циклее (++ - это +1))
    console.log('Переменная цикла for ' + i);
} 

var j = 0;
while (j < 5) {
    console.log('Переменная цикла while' + j);
    j++;
}

var x = 100;
do{ //Цикл сначала проверяет условие, а только потом запускает цикл
    console.log('Переменная цикла do while ' + x);
} while(x < 50 );

for (var i = 10; i <= 20; i +=2){ //цикл с условием и выходом по условию
    if (i > 15){
        break
    }
    console.log('Цикл с break'+i);
}

for (var i = 10; i <= 20; i ++){ //цикл с условием и продолжением по условию
    if (i % 2 == 0){
        continue;
    }
    console.log('Цикл с continue'+i);
}

var arr = [1,2,3,4,5,6, 'stroka']
for(var i = 0; i < arr.length; i++){ //Цикл перебора и вывода значений массива с нумерацией с 1
    console.log('Элемент ' + (i+1) + ' : ' + arr[i]);
}

//ВСПЛЫВАЮЩИЕ ОКНА

//alert('Сообщение во всплывающем окне'); // вывод сообщения во всплывающем окне
//var data = confirm('вывод сообщения во всплывающем окна с  кнопками Отмена/ок'); // Вывод сообщения во всплывающем окне с кнопками Отмена и ОК
//console.log('Вывод выбранного значения во всплывающем окне '+data);

//var data_1 = confirm('Вопрос с двумя кнопками');
//if (data_1){
//    alert('Результат во всплывающем окне по условию');
//}

//var data3 = prompt('Сообщение для пользователя'); //получение сообщения от пользователя (сообщение в окне, значение по умолчанию)
//console.log(data3);

//var person = null;
//if (confirm('Вы цверены?')){
//    person = prompt('Введите Ваше имя:');
//    alert('Привет ' + person);
//} else {
//    alert('Вы нажали на Отмена')
//}


//РАБОТА С ФУНКЦИЯМИ

function info(word){
    console.log(word + '!');
}

info('Фугкция с аргументом'); //вызов функции

function summa(a, b){
    var res = a + b;
    info(res); //вызов функции внутри функции
    console.log(res);
}

summa(5, 7); //вызов функции

function summa1(arr){ //функция с циклом
    var summ = 0;
    for(var i = 0; i < arr.length; i++){
        summ += arr[i];
    }
    console.log(summ)
}

var array = [6,8,9,4,5];
summa1(array);

function summa1(arr){ //функция с циклом
    var summ = 0;
    for(var i = 0; i < arr.length; i++){
        summ += arr[i];
    }
    return summ
}


var array = [6,8,9,4,5];
var res = summa1(array);
console.log('Результат функции' + res)

//ОБРАБОТЧИК СОБЫТИЙ

function onClickButton(){
    alert('Вы нажали на кнопку 2');
}

var counter = 0
function onClickButton2(el){ //подсчет количества нажатий на кнопку (вызова данной функции), где el это параметр который получается c UI 
    counter++;
    el.innerHTML = 'Вы нажали на кнопку: ' + counter;
    el.style.background = 'red'; //изменяем стиль CSS для цвета фона при нажатии
    el.style.cssText = 'border-radius: 5px; border: 0'; //написание кода css через параметр

    console.log(el.name);//обращение к атрибутам элемента UI, в данном случае атрибутам кнопки
}

function onInput(el){ //поле ввода данных, кажды раз при введении символа в поле он как оъект передается в функцию, а она выводит его в лог
    console.log(el.value);
}

//СОЗДАНИЕ ИИ ОБРАБОТКА ФОРМ

var text = document.getElementById('text'); //document глобальный объект для управления оргструктурай сайта

//работа с объектами по идентификатору id
console.log(text.id); //вывод в консоль атрибута объекта
console.log(text.title); //вывод в консоль атрибута объекта
text.title = 'Измененнный атрибут title'; //Изменение атрибута title
console.log(text.title);
text.style.color = 'green'; //изменение css стилей объекта
text.style.backgroundColor = 'blue';
text.innerHTML = 'Новая <br> строка'; //прописываем html код, innerHTML метод для работы со значениями, получить, передать
document.getElementById('text').style.color = 'white'; //прямое обращение к свойству объекта без присвоения объекта переменной

//работа с объектами по названию класса или тэга
var spans = document.getElementsByTagName('span'); // по тэгу
for (var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}
var spans_class = document.getElementsByClassName('simple-text'); // по классу
for (var i = 0; i < spans_class.length; i++){
    console.log(spans_class[i].innerHTML);
}

//ФОРМЫ
document.getElementById('main_form').addEventListener('submit', checkForm); //обращаемся к элементу по id, обработчик события где submit название события, checkForm название формы в JS
                                                                            

function checkForm(event){
    event.preventDefault();
    var el = document.getElementById('main_form');

    var name = el.name.value;
    var password = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = '';

    if (name == '' || password == '' || state == ''){
        fail = 'Заполните все поля!';
    } else if (name.length < 2 || name.length > 50) {
        fail = 'Введите корректное имя!';
    } else if (password != repass){
        fail = 'Пароли должны совпадать';
    } else if (password.split('&').length > 1){
        fail = 'Не корректный пароль';
    }

    if(fail != ''){
        document.getElementById('Error').innerHTML = fail;
    } else {
        alert('Все данные коректно заполнены');
        window.location = 'https://mail.ru/'; //перенаправление на указанную станицу
    }
}

//ТАЙМЕРЫ и ИНТЕРВАЛЫ (интервалы- выполнение кода через установленныый промежуток времени постоянно, таймер- выполенние кода через установленныый промежуток времени разово)
//интервалы
var id = setInterval(my_func, 1000); //название вызываемой функции, интервал в милисекундах
function my_func(){
    counter++;
    console.log('Counter:' + counter);

    if (counter == 3){ // Останавливаем интервал на 3 раз
        clearInterval(id);
    } 
}



// setInterval(function() {
//     counter++
//     console.log('Прошло секунд:' + counter)
// }, 1000);

//таймеры
setTimeout(function(){
    console.log('ТАймер сработал');
}, 1000);


//ОБЪЕКТЫ И ВСТРОЕННЫЕ ФУНКЦИИ

//Встроеные функции
//Работа с датой
var date = new Date();
console.log('Год ' + date.getFullYear()); //вывести год
console.log('Месяц ' + (date.getMonth()+1)); //вывести месяц
console.log('День ' + date.getDate()); //вывести день месяца
console.log('Время часы ' + date.getHours()); //вывести часы
console.log('Минуты ' + date.getUTCMinutes()); //вывести минуты
console.log('Секунды ' + date.getSeconds()); //вывести секунды

//заать свою дату
date.setFullYear(2029);
console.log('Год ' + date.getFullYear()); //вывести год

//свойства массивов
var arr = [5, 8,7,6,4,2];
console.log(arr.length); //длина списка(массива)
console.log(arr.join(', ')); // объединить элементы массива в строку через запятую с пробелом
console.log(arr.sort()); //сортировка элементов массива по возростанию
console.log(arr.reverse()); //список из элементов в обратном порядке
console.log(arr.reverse().join(', ')); //список из элементов в обратном порядке и отобразить строкой с разделителем

var stroka = arr.reverse().join(', ');
console.log(stroka.split(', '))

//создание классов и объектов
class Person{
    constructor(name, age, happiness){ // инициалихация параметров класса
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    
    info() {
        console.log('Человек ' + this.name + ', его возраст: ' + this.age);
    }
}

var alex = new Person('Alex', 45, true); //экземпляр класса
console.log(alex.name);

alex.info();