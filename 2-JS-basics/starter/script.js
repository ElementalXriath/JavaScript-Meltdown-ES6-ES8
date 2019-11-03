/*
Variables and Data Types


var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';

//Date Types - Text , String , Boolean , Undefined, Null

// Rules 
// Var cannot start with a number _ $ must be used.

var job, isMarried;

job = 'Teacher';
isMarried = false;
age = 23;

console.log( firstName + ' is a ' + age + ' year old ' + job + ' Is he married ' + isMarried );

age = 'twenty eight';

alert(firstName);

var lastName = prompt('What is his last name?');

/*
Operators 
*/
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;


//Logical Operator
console.log(yearJohn);
console.log(now + 2);

johnOlder = ageMark > ageJohn;

//typeof Operator
console.log(typeof johnOlder);

//Opertator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var ageJohn = now - yearJohn;
console.log( ageJohn > fullAge);

//increment
++
--

//Coding Challange BMI Compare

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}


var heightMark, heightJohn, bmMark, bmJohn;

heightMark = 6;
heightJohn = 5;
bmMark = 130;
bmJohn = 160;

var bmiMark = bmMark / heightMark^2;
var bmiJohn = bmJohn / heightJohn^2;

//Else Op

if (bmiMark > bmiJohn) {
    console.log('Yes Marks fat');
} else {
    console.log('Naw johns fatter');
}

// Else if Op

var firstName = 'john';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy')
} else if ( age >= 12 && age < 20) {
    console.log(firstName + ' is a teen')
} else {
    console.log(firstName + ' is a man')
}


//Tenary Opertators

firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName+ ' drinks beer') : console.log(firstName + ' drinks juice');
 
var drink = age >= 18 ? 'beer' : 'juice';


//Switch Operators

var job = 'teacher';

switch(job) {
    case 'teacher':
    console.log('teachs');
    break;

    case 'driver':
    console.log('drives');
    break;
}
//Coding Challange 2

var teamJohn, teamMike;

teamJohn = (89 + 120 + 103) / 3;
teamMike = (116 + 94 + 123) / 3;

if (teamMike > teamJohn) {
    console.log( ' Team mike wins with ' + teamMike);
} else if (teamMike < teamJohn) {
    console.log(' Team john wins with ' + teamJohn);
} else if (teamJohn === teamMike) {
    console.log(' They tied at ' + teamJohn);
};


//Functions

function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearsUntilRetirement(birthYear, firstName) {
var age = calculateAge(birthYear);
var retirement = 65 - age;
console.log(retirement + firstName);
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1990,'John');


//Function Statements and Expressions

var levelofPimpness = function(lvls, firstName) {
    switch(lvls) {
        case '21':
            return firstName + ' Pimps a few hoes'
        case '22':
            return firstName + ' Pimps more then average hoes'
        case '34':
            return firstName + ' Pimp games is at capicity'
        default:
            return firstName + ' does something else'
    }
}

console.log(levelofPimpness('34', 'Johns'));


//So in this scenerio of Functional Expresion , you call a var first then it equals a funtion. in which the funtion block you add the cases. when the funtion is called out side it must have the same parmaters.

//Arrays Elements in arrays the index is 0 bases. when console log and array u use the numerical elmeetn index

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//Mutate Array Data
name[1] = 'Ben';
names[names.length]= 'Mary';


//Differnt Data Types
var john = ['John', 'Smith', 1980, 'Teacher', false];

//Methods
// Push addes element to end of array
john.push('blue');
// Unshift
john.unshift('Mr');
console.log(john);

var isDesigner = john.indexOf('desinger') === -1 ? 'John is not a desinger' : 'John might be';
console.log(isDesigner);

//Coding Challange Arrays

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 1.5;
    } else {
        percentage =.1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalValues = [
    bills[0] + tips[0]
]


//objects john and properties

var john = {
    firstName : 'John',
    lastName: 'Doe',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

//How to access props 
console.log(john.isMarried);
console.log(john['lastName']);


//Objects and Methods

var john = {
    firstName : 'John',
    lastName: 'Doe',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        var now = 2019;
       this.age = now - this.birthYear;
    }
};

john.calcAge();
console.log(john);


var john = {
    firstName: 'John',
    height: 6,
    mass: 150,
    bmi : function(){
        var johnbmi = (this.height * 2) * this.mass;
        return johnbmi;
     }
};

var mark = {
    firstName: 'Mark',
    height: 7,
    mass: 180,
    bmi : function(){
       var markbmi = (this.height * 2) * this.mass;
       return markbmi;
    }
};

function highestBmi() {
    var johnbmi = john.bmi();
    var markbmi = mark.bmi();
    if (markbmi > johnbmi) {
        console.log('mark has the highest bmi with' + johnbmi);
    } else if (markbmi < johnbmi){
        console.log('John has the highest bmi' + markbmi);
    }
}

console.log(highestBmi());


//Factorial of 10 1. Counter Varible , updated in loop; factor ; and i++

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['john', 'smit', 1990, 'desginer', false];

for (var i =0 ; i< john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        //For array movement
        for (var i = 0; i < this.bills.length; i++) 
        {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            
        }
    }
}

john.calcTips();
console.log(john)