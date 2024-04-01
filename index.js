import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("corect pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "plese select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCahAns = await inquirer.prompt([
            {
                name: "cash",
                message: "Select the amount you'd like to fast cash:",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000", "10000"]
            }
        ]);
        myBalance -= fastCahAns.cash;
        console.log(`your reamining balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorect pin code");
}
