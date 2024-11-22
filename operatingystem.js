const os = require('os')
var totalMemory = os.totalmem();
var freeMemory =os.freemem();
console.log(`Total Memory: ${totalMemory} `)
console.log(`Free Memory:  ${freeMemory} `)
// Total Memory: 17178681344
// Free Memory:  6373384192



