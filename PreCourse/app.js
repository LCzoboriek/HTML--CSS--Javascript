let firstNames = "Luke";
let lastNames = "Czoboriek";
let twitter = "@czoboriek";

let person = {
    firstNames: "Luke",
    lastNames: "Czoboriek",
    twitter: "@czoboriek",
    greet: function() {
        console.log(`My name is ${firstNames} ${lastNames} and my twitter handle is ${twitter}`);
    }
};

person.greet();

