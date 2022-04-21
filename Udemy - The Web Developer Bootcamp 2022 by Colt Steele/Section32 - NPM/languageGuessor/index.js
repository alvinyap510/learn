// import {franc, francAll} from 'franc'
// import
// const colors = require('colors');
// // const franc = require('franc');
// const langs = require('langs');

// const input = process.argv[2];
// // const langCode = franc(input);

// // if (langCode === 'und') {
// //     console.log("I don't understand the language".red)
// // } else {
// //     const language = langs.where("3", langCode);
// //     console.log(`Our best guess is: ${language.name}`.gre
// // }

// (async () => {
//     const { franc } = await import('franc');
//     const langs = require('langs');
//     const input = process.argv[2];
//     const langCode = franc(input);
//     if (langCode == 'und') {
//         console.log('Sorry');
//     } else {
//         const language = langs.where('3', langCode);
//         console.log(`Our best guess is : ${language.name}`)
//     }
// })();


import { franc , francAll } from 'franc';
import langs from 'langs'
// var colors = require('colors');
import pkg from 'colors';
const {colors} =pkg;
 
 
// console.log(langs)
// console.log(franc)
// console.log(francAll)
// let langcode = franc('Alle menslike wesens word vry') // => 'afr'
 
 
let input = process.argv[2];
let langcode = franc(input);
var language = langs.where("3",langcode);
 
 
if(langcode==="und")
{
    console.log("Too Short".red);
}
else
{
    console.log((language.name).green)
}