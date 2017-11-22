// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
// var toAdd = [5,5]
//
// console.log(add(...toAdd))

var groupA = ['josh', 'steve']
var groupB = ['matt']
var final = [13, ...groupA]

console.log(final[2])

var person = ['Andrew', 25]
var personTwo = ['Jen', 29]

function printOut(name, age) {
  return  'Hi ' + name + ', you are ' + age + ' years old'
}

console.log(printOut(...person))
console.log(printOut(...personTwo))


var names = ['mike', 'ben']
var final = ['luke']

var newFinal = [...final, ...names]

newFinal.forEach(function(name) {
  console.log('hi ' + name)
})
