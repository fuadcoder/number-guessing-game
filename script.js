const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_nums = [];

function play() {
    const user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please input a number between 1 and 100");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {
            message1.textContent = "Your guess is too low";
            message2.textContent = "No. of guesses: " + no_of_guesses;
            message3.textContent = "Guessed numbers are: " + guessed_nums
        }
        else if (user_guess > answer) {
            message1.textContent = "Your guess is too high";
            message2.textContent = "No. of guesses: " + no_of_guesses;
            message3.textContent = "Guessed numbers are: " + guessed_nums;
        }
        else if (user_guess == answer) {
            message1.textContent = "Yaay You Win!!!";
            message2.textContent = "The number was: " + answer;
            message3.textContent = "You guessed it in " + no_of_guesses + " guesses";
            document.getElementById("btn").disabled = true;
        }
    }
}