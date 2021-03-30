// npm run axy
const { exec } = require('child_process');
 
let word = 'axios'
let word2 = 'express'

// you can also add multiple calls for example when doing git add . git commit
// the second dependency will run after the first exect is done, then 
// The third one will be called after the second one is done

exec(`npm i ${word}`, installSecondDep)
console.log('installing please wait..');

function installSecondDep(){
  console.log('installing express');
  exec(`npm i ${word2}`, installThird)
}

function installThird(){
  console.log('third dependency');
}