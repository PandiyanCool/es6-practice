var one, two, three;

[one, two] = [1, 2];

console.log(`${one} ${two}`);

var fruits = [
    'mango',
    'banana',
    'jack fruit'
];

var [fruitOne, fruitTwo, fruitThree] = fruits;

console.log(`${fruits}`);

console.log(`${fruitOne} ${fruitTwo} ${fruitThree}`);

// Object Desctructuring
// ES5
var username = {
    firstName: 'Pandiyan',
    lastName: 'Murugan'
};

var firstName = username.firstName;
var lastName = username.lastName;

console.log(firstName + ' ' + lastName);


// ES6

var username = {
    firstName: 'MS',
    lastName: 'Dhoni'
};

var { firstName, lastName } = username;

console.log(firstName + ' ' + lastName);


// syntax error

// var { firstName, lastName };


// default values

var username = {
    firstName: 'MS',
    lastName: 'Dhoni'
};

var { firstName, lastName, designation } = username;

console.log(firstName + ' ' + lastName + ' ' + designation);
// designation will be undefined

var username = {
    firstName: 'MS',
    lastName: 'Dhoni'
};

var { firstName, lastName, designation = 'player' } = username;

console.log(firstName + ' ' + lastName + ' ' + designation);

// designation will be set as player if it didn't find the value for player in username object



var username = {
    firstName: 'MS',
    lastName: 'Dhoni'
};

var {  lastName: localLastName, firstName: localFirstName } = username;

console.log(localFirstName +' '+ localLastName);     // MS Dhoni