const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('What do you think of Node.js? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.close();
      });
    });
  });
});


// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

