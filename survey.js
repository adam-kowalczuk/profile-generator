const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//AN ARRAY THAT HOUSES ALL ANSWERS
const answersArr = [];

//FUNCTION THAT RETURNS A PARAGRAPH WITH EACH ANSWER EMBEDDED
const generatedProfile = function() {
  setTimeout(() => {
    console.log(`\n${answersArr[0]} loves listening to ${answersArr[2]} while ${answersArr[1]}, devouring ${answersArr[4]} for ${answersArr[3]}, prefers ${answersArr[5]} over any other sport, and is amazing at ${answersArr[6]}. `);
  }, 1700);
};

// SPINNER FUNCTION FROM PREVIOUS EXERCISE (JUST FOR FUN)
const spinner = (action) => {
  const animation = "|/-\\|/-\\|";
  let timer = 100;
  for (const char of animation) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   ${action}`);
    }, timer);
    timer += 200;
  }
};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answersArr.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    answersArr.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answersArr.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        answersArr.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          answersArr.push(answer);
          rl.question('Which sport is your absolute favourite ? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            answersArr.push(answer);
            rl.question('What is your superpower ? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              answersArr.push(answer);
              spinner('Generating Profile...');
              generatedProfile();

              rl.close();
            });
          });
        });
      });
    });
  });
});




