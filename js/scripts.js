//JavaScript Review File

console.log("Happy")


var age = 16;
var myBirthYear = 2000;
var graduationYear = 2018;
var numberOfBrothersAndSisters = 2;
var numberOfKids = 0;
var cityName = "Indianapolis";
var p = "."

//String Concatenation
console.log("I am " + age + "years old" + ".");
console.log("I was born in " + myBirthYear + " in " + cityName + ".");
console.log("I will graduate from highschool in " + graduationYear + ".");
console.log("I have " + numberOfBrothersAndSisters + " brothers and sisters" + p);
console.log("I have " + numberOfKids + " kids");

//Manipulationg the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("graduation-year").innerHTML = graduationYear;
document.getElementById("number-of-kids").innerHTML = numberOfKids;


//Arrays

var abc = "abcdefghijklmopqrstuvwxyz";
var abcArray = ["a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

//Another way to create an array
var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "Sprite";
typesOfSoda[2] = "Pepsi";

console.log(typesOfSoda);

var worstKindsOfSoda = new Array();
worstKindsOfSoda[0] = "Coke";
worstKindsOfSoda[1] = "Diet Coke";
worstKindsOfSoda[2] = "Coke Zero";
worstKindsOfSoda[3] = "Diet Pepsi";
worstKindsOfSoda[4] = "Diet Mountain Dew"



var bestCandyBars = ["Snickers", "Twix", "Hershey's with almonds", "Reese's", "100 Grand"]
bestCandyBars[4] = "100 Grand";

//console.log(bestCandyBars);
var mixedArray = [1, "Bill Gates", (5 > 1)];
console.log(mixedArray);


// FOR LOOPS
for (var i = 0; i < 10; i++){
	console.log(i);
}

for(var i = 0; i<=20; i+=2){
	console.log(i);
}
//Write a loop that prints 0-20 by 2's

//Write afor loop that prints 0-50 by 5's. 
//When you get to fifty print"I'm rich".

for(var i = 0; i< 51; i+=5){
	if(i===50){
		console.log(i + " I'm rich!");
	} else {
	console.log(i);
	}
}

var friends = ["Joshua", "Austin", "Bryce", "Jeremiah", "Nigel", "Darrian", "James", "Jake"];
for (var i = 0;i < friends.length;i++){
	if(friends[i].charAt(0)=="J"){
		console.log(friends[i]);
	}
}

//Objects
var beachBag = {
	numBottles       : 3,
	colorOfTowel     : "Green",
	isWet            : false,
	//Functions
	zipUp			 : function(){
		console.log("zipper sound"); 
	}
}

console.log(beachBag);
console.log(beachBag.isWet);
beachBag.zipUp();

//Make an object called Nerd
//Give five properties hasGlasses
//Give one function

var nerd = {
	bigBrain    : "smart",
	greasyHair  : "messy",
    hasGlasses  : true,
    Nickname    : "Brace Face",
    //Functions
    swirly      : function(){
    	console.log("Girgle");
    }
}
console.log(nerd.bigBrain);

var player = {
	//Properties
	name          : "Jeremiah",
	health        : 1000,
	damage        : 10,
	hasSword      : true,
	hasSniperRifle: false,
	hasArmor      : true,

	//Functions
	attack        : function(target){
		console.log(this.name + " attacks " + target + this.damage);
	},

	swatWithSword : function(target){
		var damage = 25 * this.damage;
		console.log(this.name + "did " + damage + " damage to " + target)
	},

	heal : function(target){
		var health = player.health + 25;
		console.log(this.name + " regained " + health + " health")
	}
}

//Create an animal object with the following properties:
//a boolean for living
//a boolean for whether it eats or not
//a boolean for if it runs
//a boolean for if it jumps
//how many eyes it has
// a boolean for whether it is cute or not
//Make a silly message function for how it breaths

var animal = {
	//Properties
	living     :true,
	eat        :true,
	run        :true,
	jumps      :true,
	eyes       :2,
	cute       :true,
	legs       :4,
 //Functions
 breathing : function(){
 	console.log("Gurgle");
 }
}

animal.breathing();

var snake = Object.create(animal);

console.log(snake.eyes);
snake.legs = 0;
console.log(snake.legs);
snake.breath = function(){
	console.log("Hissssssssssssssssssssss");
}
snake.breath();

var rabbit = Object.create(animal);

rabbit.ears = "Huge";
console.log(rabbit.ears);

//Create a cow object with two new properties and a new function

var cow = Object.create(animal);
cow.wings = mini
cow.tail = spiky
cow.sound = function(){
	console.log("Mooooooooo!"); 
}


