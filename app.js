// Chap 4

// Q1

var firstName = "Jhon", lastName = "Doe" , age = "30";

// Q2

// Legal variable ____________

  var userName = ""
  var _totalAmount = ""
   var  $price = ""
   var  myVariable = ""
     var   userAge = ""

 // Illegal variable _____________
 
//  var 123 (Numbers)

// var user-name (hyphen)

// var if , statement (reserved keyword)

// var abc@efg (symbol)

// var abc ced (space)



// Q3 (a)

document.write("<h1> Rules for naming JS variables </h1>")

// Q3 (b)

document.write(" Variables names can only contain Letters , numbers , dollor signs , and underscores")


// Q3 (c)

document.write(" <br> Variables must begin with a letter, underscore (_), or dollar sign ($).") 

// Q3 (d)

document.write("<br> Variable names are case sensitive.") 

// ________________________________-

// Chap 5

// Q1

var number1 = 3
var number2 = 5


var calculation = (number1 + number2)
console.log(calculation)

// Q2

var number1 = 3
var number2 = 5

// Subtraction
var calculation = (number1 - number2)
console.log(calculation)

// Multiplication
console.log(number1 * number2)

// Division
console.log(number1 / number2)

// Modulus
console.log(number1 % number2)

// Q3

// part (a)
var myVariable;

//  part (b)
document.write(" <br> <br> Value after variable declaration is:" + myVariable)

//  part (c)

var myVariable = 5

//  part (d)
document.write(" <br> Initial value:" + myVariable)

// part (e , f)
var myVariable = 5

document.write(" <br> Value after increment is:"  +  ++myVariable + "<br>")


 // g. Add 7 to the variable.
 myVariable += 7;

 // h. Show the value of the variable after addition.
 document.write("Value after addition is: " + myVariable + ".<br>");

 // i. Decrement the variable.
 myVariable--;

 // j. Show the value of the variable after decrement.
 document.write("Value after decrement is: " + myVariable + ".<br>");

 // k. Show the remainder after dividing the variable's value by 3.
 var remainder = myVariable % 3;

 // l. Show the remainder in the browser.
 document.write("The remainder is: " + remainder + ".");


//  Q4

var ticketPrice = 600
var buyingTicket = 5


document.write("<br> <br> Total cost to buy 5 tickets to a movie is " + ticketPrice * 5 + " PKR")


// Q5

var number = 9

document.write("<br> <br>" + number + " x 1 = " + number  + "<br>" + number + " x 2 =" + number * 2 + "<br>" + number + " x 3 =" + number * 3 + "<br>" + number + " x 4 =" + number * 4 + "<br>" + number + " x 5 =" + number * 5 + "<br>" + number + " x 6 =" + number * 6 + "<br>" + number + " x 7 =" + number * 7 + "<br>" + number + " x 8 =" + number * 8 + "<br>" + number + " x 9 =" + number * 9 + "<br>" + number + " x 10 =" + number * 10 )


// Q6

// Step a: Store a Celsius temperature into a variable.
var celciusTemprature = 30;

// Step b: Convert it to Fahrenheit & output “NNoC is NNoF”.
var fareheitTemprature = (celciusTemprature * 9/5) + 32;

document.write("<br> <br>" + celciusTemprature + "°C is " + fareheitTemprature + "°F" )

// Step c: Now store a Fahrenheit temperature into a variable.
var farenheitTemprature2 = 86 

// Step d: Convert it to Celsius & output “NNoF is NNoC”.
var celciusTemprature2 = (farenheitTemprature2 -32) * 5/9;

document.write( "<br>" + farenheitTemprature2 + "°F is " + celciusTemprature2 + "°C")



//  Q7

document.write("<br> <br> <h1> Shopping Cart </h1> ")

var item1Price  = 650
var quantity = 3
var totalAmount = 1950

console.log(item1Price * quantity)


var item2Price = 100
var quantity2 = 7
var totalAmount2 = 700 + 100

console.log(item2Price * quantity2)

var shipping = 100
var total = 1950 + 700 + 100;

document.write("<br>  Price of item 1 is 650" + "<br>  quantity of item 1 is 3 " + "<br>  Price of item 2 is 100 " + "<br> Quantity of item 2 is 7 " + "<br> Shipping charges 100 ")

document.write(" <br> <br> Total cost of your order is " + total )

// Q8

var totalMarks = 850
var marksObtained = 670

var percentage = (marksObtained / totalMarks) * 100

document.write( "<br> <br> <h1> Mark Sheet </h1>")

document.write("<br> Total Marks: " + totalMarks)
document.write(" <br>Marks Obtained: " + marksObtained)
document.write("<br> Percentage: " + percentage + "%")


//  Q9

// Given exchange rates
var usdtoPkrRate = 104.80;
var sartoPkrRate = 28;


// Amounts in US dollars and Saudi Riyals
var usdAmount = 10;
var sarAmount = 25;

// Convert the total amount to Pakistani Rupees in a single expression
var totalPkr = (usdAmount * usdtoPkrRate) + (sarAmount * sartoPkrRate);

document.write(" <br> <br> Total Currency in PKR: " + totalPkr)

// Q10

var number = 7

console.log(((number + 5 )* 10) / 2)

// Q11

var currentYear = 2024;
var birthYear = 2007;

var age1 = currentYear - birthYear;

document.write("<br> <br> <h1> Age Calculator </h1> " + "<br> Current Year: 2024" + "<br> Birth Year: 2007 " + "<br> Your Age is: " + age1)

console.log(age1)

// Q12

// var radius = 5;
// var circumference = 2 * Maths.PI * radius;
// var area = Maths.PI * radius;
// document.write("<br> <br> <h1> The Geometrizer <h1/> " + "<br> Radius of a circle: 5" + "<br> The circumference is: " + circumference + "<br> The area is " + area)





// Q13

var favSnack = "Chocolates bars"
var curAge = 17
var maxAge = 60
var amountPerDay = 2


var totalAmount = (amountPerDay * 365) * (maxAge - curAge);

var message = "You will need " + totalAmount + " Chocolate bars to last you untile the ripe old age of " + maxAge;

document.write("<br> <br>" + message)

console.log(totalAmount + favSnack + maxAge)

// ________________________________________


//  Chap 6-9

// Q1

  var x = ++x

  // Q2

  var x = 100;

  console.log(--x)

  // Q3

  var x = 50;
  var y = x++;
  // The value of x becomes 51.
  // The value of y becomes 50.

  
// Q4

var y = 50;
var z = --y;

// The value of y becomes 49.
// The value of z becomes 49.

// Q5

var num = 10;
var newNum = --num;

// Q6

var num = 5;
var num2 = ++num;

// Q7

var number = 7;
number++;

alert("The new value is: " + number)

// _____________________________________

//  Chap 7

// Q1

var calculatedNum = 2 + (2 * 6);

console.log(calculatedNum)

// 14 Ans

// Q2

var calculatedNum2 = (2+2) * 6;
console.log(calculatedNum2)

// 24 Ans


//  Q3

var calculatedNum3 = (2 + 2) * (4 + 2);

console.log(calculatedNum3);

// Q4

var calculatedNum4 = ((2 + 2) * 4) + 2;

console.log(calculatedNum4)

// Q5

var cost = (2 + 2) *( 4 + 10);
console.log(cost)

// Q6

var units = 2 +( 2 * 4) + 10;
console.log(units)

// Q7

var pressure = 4 / (2 * 4);
console.log(pressure)

// ______________________________________

// Chap 8

var num = "2" + "2";
console.log(num)
// ANS 22

// Q2

var message = ("Hello " + " Dolly")
alert(message)
// Hello Dolly

// Q3

alert("33" + 3)
// 333 Ans

// Q4

var part1 = "Pakistan"
var part2 = "Zindabad"

alert(part1 + " " + part2)

// Q5

var stringValue = "Hello"
var number = 123
alert(stringValue +  number)

// Q6

var variable1 = "Hello"
var variable2 = "World"

var result = variable1 + variable2
alert(result)

// __________________________________

// Chap 9

// Q1

var firstName = prompt("Enter first name")
console.log("First Name " + firstName)

// Q2

var countName = prompt("Country?" , "China");
console.log(countName)

// Q3

// Correct this statement var yourName = prompt(Enter Your Name");

var yourName = prompt("Enter your name")


// Q4

var subject = prompt("Subject Name" , "English")

console.log(subject)

// Q5

var age = "Your Age"
var age2 = "17"

var userResponse = prompt(age , age2)

// Q6

var userResponse = prompt("Enter Your Favorite food" , "Pizza");

alert("Your Favourite Food is " + userResponse)


































































































































 





