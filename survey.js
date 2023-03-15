const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const animation = "|/-\\|/-\\|";
let timer = 100;

const spinner = () => {
  for (const char of animation) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   Generating Profile...`);
    }, timer);
    timer += 200;
  }
  console.log('hello');
};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          rl.question('Which sport is your absolute favourite ? ', (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);
            rl.question('What is your superpower ? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`);
              spinner();

              rl.close();
            });
          });
        });
      });
    });
  });
});

// const profile = function() {
//   console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}. `);
// }

