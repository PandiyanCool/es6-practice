var names = [
    'sachin',
    'sehwag',
    'dhoni'
];

var traditional = names.map(function (val) { return val.length; });

console.log(`length printed using traditional way:  ${traditional}`);

var usingArrow = names.map((val) => val.length);

console.log(`length printed using arrow function: ${usingArrow}`);