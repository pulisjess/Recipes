var list = ["cauliflower Patties","Bean Burgers","Fish and Chips","patata l-forn","veggie Balls","Boiled Veggies","Cauliflower with BreadCrumbs","Zucchini Stuffed","Artichokes","Baked fish","Fish Cakes","Aliotta","Paiella","minestra","Brodu","Kosksu","Widow soup"];

var pastaDishes = ["pasta with pesto","pasta Napolitana","White Sauce Pasta","Pizza tarja","Lasagnia","Cannelloni","Tortellini","Cabbage Pasta","Buttered Pasta","Oven Baked Pasta","Baked Rice","Rice Salad","Bell Pepper pasta","pasta with Vongole","Ricotta Pie","Ravioli","Pizza"];


var numberOfDishes = list.length;
var dishPosition = Math.floor(Math.random()*numberOfDishes+1);
var mondayDish = list[dishPosition];

list.pop(mondayDish);

var numberOfDishes2 = list.length;
var dishPosition2 = Math.floor(Math.random()*numberOfDishes2+1);
var tuesdayDish = list[dishPosition2];

list.pop(tuesdayDish);

var numberOfDishes3 = pastaDishes.length;
var dishPosition3 = Math.floor(Math.random()*numberOfDishes3+1);
var wednesdayDish = pastaDishes[dishPosition3];

pastaDishes.pop(wednesdayDish);

var numberOfDishes4 = list.length;
var dishPosition4 = Math.floor(Math.random()*numberOfDishes4+1);
var thursdayDish = list[dishPosition4];

list.pop(thursdayDish);

var numberOfDishes5 = list.length;
var dishPosition5 = Math.floor(Math.random()*numberOfDishes5+1);
var fridayDish = list[dishPosition5];

list.pop(fridayDish);

var numberOfDishes6 = pastaDishes.length;
var dishPosition6 = Math.floor(Math.random()*numberOfDishes6+1);
var saturdayDish = pastaDishes[dishPosition6];

pastaDishes.pop(saturdayDish);

var numberOfDishes7 = pastaDishes.length;
var dishPosition7 = Math.floor(Math.random()*numberOfDishes7+1);
var sundayDish = pastaDishes[dishPosition7];

document.querySelector('.monday').innerHTML = mondayDish;
document.querySelector('.tuesday').innerHTML = tuesdayDish;
document.querySelector('.wednesday').innerHTML = wednesdayDish;
document.querySelector('.thursday').innerHTML = thursdayDish;
document.querySelector('.friday').innerHTML = fridayDish;
document.querySelector('.saturday').innerHTML = saturdayDish;
document.querySelector('.sunday').innerHTML = sundayDish;
