import {greet} from './greet.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

// require ("cowsay")

// export/import

// npm init es6
// create a index.js file
// export the greet function from greet.js
// import the greet function in index.js

// install it => npm install --save chalk
// import it => import chalk from 'chalk';
/*
 import chalk from 'chalk'
// import the greet module that i in the current folder
import greet from './ greet.js'
const styledMessage = chalk.bgGreen.black(greet('Leli'));
console.log(styledMessage)
*/




console.log(chalk.bgGreen.white(cowsay.say({
    text: "Hello, Mothusi!"
})));
console.log(chalk.bgGreen.black(greet('Mothusi')));

figlet('Hello, Mothusi!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});