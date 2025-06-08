const prompt = require("prompt-sync")();

const message = ""
Welcome to Phasegate Menstrual cycle calculator...

Press any of the following to perform an action:

1: to calculate the date of your menstrual cycle.
0: to exit the app.
"";

  let condition = true;

  while (condition) {
    const userChoice = await Question(message);

    switch (userChoice) {
      case '1':
        console.log("Welcome to your calculator\nEnter your start date in this order (year, month, day): ");
        const year = parseInt(await askQuestion('Year: '), 10);
        const month = parseInt(await askQuestion('Month: '), 10);
        const day = parseInt(await askQuestion('Day: '), 10);

        const cycle = parseInt(await askQuestion("How many days is your cycle?: "), 10);

        console.log();

        console.log(MentrualAppFunction.begin(year, month, day));
        console.log();
        console.log(MentrualAppFunction.finish(year, month, day, cycle));
        console.log();
        console.log(MentrualAppFunction.flowDate(year, month, day));
        console.log();
        console.log(MentrualAppFunction.ovulation(year, month, day, cycle));
        console.log();
        console.log(MentrualAppFunction.fertileLength(year, month, day, cycle));
        console.log();
        console.log(MentrualAppFunction.safeperiod(year, month, day, cycle));
        console.log();
        break;

      case '0':
        condition = false;
        break;

      default:
        console.log("Invalid input... Try again");
        break;
    }
  }

 
}
