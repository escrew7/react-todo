var moment = require('moment')

console.log(moment().format())

var now = moment()

console.log('Current Timestamp ' + now.unix())

var timeStamp = 1512637329
var currentMoment = moment.unix(timeStamp);
console.log(currentMoment.format('MMM'))

console.log(moment().format('MMM D, YY @ h:mma'))

console.log(currentMoment.format('MMMM Do, YYYY @ hh:mmA'))
