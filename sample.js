var fruits = [
    'mango',
    'jack fruit',
    'banana'
];

// using traditional function
var a = fruits.map(function (f) {
    return f.length;
})

// using arrow function
var b = fruits.map(f => f.length);

console.log(`using traditional function ${a}`);
console.log(`using arrow function ${b}`);