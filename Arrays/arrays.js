var cars = ["Saab","Volvo", "BMW"];
var x = cars[1];
alert (x);

/*cars[0] = "Ford";
alert(cars);*/
alert(cars.length);

cars.push ("Tesla");
alert(cars);

cars.pop ();
alert (cars);

var fruits = [ "Lemon", "Orange", "Melone", "Banana"];
var name = ["Lion", "Jon"];
var all = name.concat(fruits);
alert (all);