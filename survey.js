const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const animation = "|/-\\|/-\\|";
let timer = 100;

const spinner = (callback) => {
  for (const char of animation) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   Generating Profile...`);
    }, timer);
    timer += 200;
  }
  setTimeout(() => {
    callback();
  }, 1700);

};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  answersArr.push(answer1);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    answersArr.push(answer2);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      answersArr.push(answer3);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        answersArr.push(answer4);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          answersArr.push(answer5);
          rl.question('Which sport is your absolute favourite ? ', (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);
            answersArr.push(answer6);
            rl.question('What is your superpower ? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`);
              answersArr.push(answer7);
              spinner(profile);
              // profile();
              rl.close();
            });
          });
        });
      });
    });
  });
});

answersArr = [];

const profile = function() {
  console.log(`\n${answersArr[0]} loves listening to ${answersArr[2]} while ${answersArr[1]}, devouring ${answersArr[4]} for ${answersArr[3]}, prefers ${answersArr[5]} over any other sport, and is amazing at ${answersArr[6]}. `);
}


