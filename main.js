console.log("Hello node js");

const pin = process.env.PIN;
console.log(pin);

const argument = process.argv.slice(2).toString();
console.log(argument);

if (argument === "admin" && pin === "666"){
    console.log("Welcome Admin");
} else {
    console.log("Access restricted");
}
