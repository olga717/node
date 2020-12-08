

/*function showMessage() {
	console.log('Сообщение');
}

showMessage();*/


alert('Привет!');

/*let age = prompt('Сколько тебе лет?', '');
alert(`Какая ты молодая!`);



let isBoss = confirm('Ты здесь главный?');
alert(isBoss);*/


/* Строковое преобразоване
let value = true;
alert(typeof value);//boolean
value = String(value);//функция String() прео-ит значение к строке.
alert(typeof value);//string

/*Численное преобразование*/
/* происходит в матем фун-их и выр-ях*/
/* например когда деление / применяется не к числам*/
/*alert("6"/"2");
let str = "123";
alert(typeof str);//string
let num = Number(str);//функция Number() прео-ит в число 123
alert(typeof num);*/

/*Логческие преобразования*/



/* УСЛОВИЯ Конструкция if() и блок else*/
/*let year = prompt('В каком году JS?');

if (year == 2015) {
	alert("Правильно!");
} else {
	alert("Неправильно!");
}*/

/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ  по приоритету !(не) &&(и) ||(или)*/
/*let myNumber = 30;
if ("Вася" != "Петя" && myNumber > 50) {
	console.log("Ok");
} else {
	console.log ("Число больше 30");
}*/



/*Несколько условий проверяем
с помоью "else if"*/
/*if (year<2015) {
	alert("Это слишком рано!");
}   else if (year>2015) {
	alert("Это поздновато!");
}   else {
	alert("Верно!");
}*/

/*Оператор ? и несколько опер-в ? 
БОЛЕЕ ДЛИННАЯ ЗАПИСЬ
let accessAllowed;
let age = prompt ("Сколько вам лет?", "");
	if (age > 18) {
	accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);*/

/* БОЛЕЕ КОРОТКАЯ ЗАПИСЬ*
let age = prompt ("Сколько тебе лет?", "");
/*let accessAllowed = (age > 18) ? true : false;*/
/*let accessAllowed = age > 18;
alert(accessAllowed);*/

/*НЕСКОЛЬКО ОПЕРАТОРОВ ?*/
/*
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );*/


/*let quit = prompt ("Какое название JS?", "");

if (quit=="ESMA") {
	alert("Правильно!");
} else {
	alert("Не знаете? ESMA!");
}*/


/*МАССИВЫ*/
/*let name = ["Вася", "Петя", "Маша"];
console.log (name[1]);*/




/*ЦИКЛЫ операторы break continue*/
for (var i = 0; i < 10; i++) {
	if (i==5){
    break;
	}
	console.log(i);
}
/*пропускает шаг 5 и выводит остальное*/
for (var i = 0; i < 10; i++) {
	if (i==5){
  continue;
	}
	console.log(i);
}
 /*Использование цыкла в массиве*/
 let name = ["Вася", "Петя", "Маша"];
 
 for (var j = 0; j < name.length; j++) {
	console.log (name[j]);
	}
	
	/*ЦИКЛ While (цикл for более наглядный)*/
	var i = 0;/* var об-ям за пределами цикла*/
	while (i < 10)/*условие*/ {
	console.log(i);/*вывод в консоль*/
	i++;/*и потом увелечение*/
}

/*ФУНКЦИЯ позволяет избавиться от дублежки кода*/
 /*test (10, 59); 
 function test (x, y) {
 	console.log( x + y);
 }*/
 /* ПРИМЕР ф-ция вычесляет и возвра-ет значение,
 для дальней-го испол-я, оператор return*/
function test (x, y) {
	return x + y;
}
console.log ( test (10, 59)); 
/*можем вызывать ф-цию много раз с разными зн-ми*/
console.log ( test (34, 16));
  
  /*ОБЪЕКТЫ*/
var myObject = {
	name: "Вася",
	surName: "Васин",
	age: 25,
	getFullName: function() {
		return this.name + " " + this.surName;
	}
};

/*myObject.name = "Я";*/
console.log(myObject.name);
console.log(myObject.getFullName());

/*СОБЫТИЯ*/
function buttonClick (button) {
	alert ("Вы нажали на кнопку!");
}