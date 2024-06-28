#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: { name: "US Dollar", value: 1 },
    EUR: { name: "Euro", value: 0.9 },
    GBP: { name: "British Pound", value: 0.8 },
    INR: { name: "Indian Rupee", value: 75 },
    CAD: { name: "Canadian Dollar", value: 1.5 },
    AUD: { name: "Australian Dollar", value: 1.3 },
    JPY: { name: "Japanese Yen", value: 120 },
    PKR: { name: "Pakistani Rupee", value: 278.22 },
};
const convertCurrency = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select the currency you want to convert from",
        choices: Object.keys(currency),
    },
    {
        name: "to",
        type: "list",
        message: "Select the currency you want to convert to",
        choices: Object.keys(currency),
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to convert",
    },
]);
const fromCurrency = currency[convertCurrency.from];
const toCurrency = currency[convertCurrency.to];
const amount = convertCurrency.amount;
const baseValue = amount / fromCurrency.value;
const convertedValue = baseValue * toCurrency.value;
console.log(`${amount} ${fromCurrency.name} is equal to ${convertedValue} ${toCurrency.name}`);
