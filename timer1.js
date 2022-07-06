const childProcess = require("child_process");
const { type } = require("os");

let myTimers = process.argv;
myTimers.splice(0, 2)
console.log(myTimers);

const doTimer = function(time) {
  setTimeout(() => {
    console.log("Ding!");
    childProcess.exec("afplay /System/Library/Sounds/Ping.aiff");
  }, time);
};

for (let i in myTimers) {
  if (myTimers[i] > 0 && +myTimers[i] == myTimers[i]) {  
    doTimer(myTimers[i] * 1000);
  };
  if (+myTimers[i] != myTimers[i]) {console.log("Not a number:", myTimers[i])}
};