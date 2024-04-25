require('dotenv').config();//takes the values we have in .env it stores it here i think
const path =require( 'path');
const app = require('express')
const PORT = process.env.PORT || 3000 // ?? if first part is null then use second

console.log('The best class at New Paltz is:',process.env(BEST_CLASS))