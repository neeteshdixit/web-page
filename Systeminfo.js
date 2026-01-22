const os = require("os");
console.log("Operating System information\n");
console.log(os.type())
console.log(os.platform())
console.log(os.arch())
console.log("CPU details")
console.log(os.cpus())