#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./index');

//  Customer Questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer First Name'

    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer Last Number'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
    
];

program 
   .version('1.0.0')
   .description('')

// program
//    .command('add <firstname> <lastname> <phone> <email>')
//    .alias('a')
//    .description('Add a customer')
//    .action(( firstname, lastname, phone, email) => {
//      addCustomer({firstname, lastname, phone, email});
//    });

//  Add command
program
   .command('add')
   .alias('a')
   .description('Add a Customer')
   .action(() => {
    prompt(questions).then(answers => addCustomer(answers));
   });

//  Find command
program
   .command('find <name>')
   .alias('f')
   .description('Find a customer')
   .action(name => findCustomer(name));

//  Update command
program
   .command('update <_id>')
   .alias('u')
   .description('Update a Customer')
   .action((_id) => {
    prompt(questions).then(answers => updateCustomer(_id, answers));
   });

//  Remove command
program
   .command('remove <_id>')
   .alias('r')
   .description('Remove a customer')
   .action(_id => removeCustomer(_id));

   //  Remove command
program
.command('list')
.alias('l')
.description('List all customer')
.action(() => listCustomer());




program.parse(process.argv);