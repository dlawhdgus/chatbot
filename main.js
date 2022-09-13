import { help,Korea,Usa,China,Arab, Spain, France, Russia, Japan, Portugal, Philippine } from "./Bot.js"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(`
안녕하세요 종현 챗봇 입니다.
도움말을 보고싶다면 0,
종료를 하려면 11 을 입력해 주세요
`)

rl.on("line", (line) => {
    let command = line;
    switch (command) {
        case '0' : 
            help()
            break
        case '1' : 
            Korea()
            break;
        case '2' : 
            Usa()
            break;
        case '3' : 
            China()
            break;
        case '4' : 
            Arab()
            break;
        case '5' : 
            Spain()
            break;
        case '6' : 
            France()
            break;
        case '7' : 
            Russia()
            break;
        case '8' : 
            Japan()
            break;
        case '9' : 
            Portugal()
            break;
        case '10' : 
            Philippine()
            break;
        case '11' : 
            rl.close();
            break;
        default : 
            console.log('숫자를 잘 못 입력하셨습니다.');
            break;
    }
});