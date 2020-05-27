let user_score = 0;
let comp_score = 0;
const user_score_span = document.getElementById("user-score");
const comp_score_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("reset");

function main() {
 rock_div.addEventListener('click', () => game("r"));
 paper_div.addEventListener('click', () => game("p"));
 scissors_div.addEventListener('click', () => game("s"));
 reset_div.addEventListener('click', () => clear());
}

function clear() {
 //restarts the game
 user_score = 0;
 comp_score = 0;
 user_score_span.innerHTML = 0;
 comp_score_span.innerHTML = 0;
 result_p.innerHTML = "Let's start playing!";
}

function get_comp_choice() {
 const choices = ['r', 'p', 's'];
 const random_number = Math.floor(Math.random() * 3);
 return choices[random_number];
}

function game(user_choice) {
 const comp_choice = get_comp_choice();
 switch (user_choice + comp_choice) {
  //user wins
  case "rs":
  case "pr":
  case "sp":
   win(user_choice, comp_choice);
   break;
  //user loses
  case "sr":
  case "rp":
  case "ps":
   lose(user_choice, comp_choice);
   break;
  //tie
  case "rr":
  case "pp":
  case "ss":
  tie(user_choice, comp_choice);
  break;
 }
}

function win(user_choice, comp_choice) {
 user_score++;
 user_score_span.innerHTML = user_score;
 const small_user_word = "user".fontsize(3).sub();
 const small_comp_word = "comp".fontsize(3).sub();
 result_p.innerHTML = `${convert_choice_to_word(user_choice)}${small_user_word} beats ${convert_choice_to_word(comp_choice)}${small_comp_word}. You win!`;
 document.getElementById(user_choice).classList.add("win-green");
 setTimeout(function() {document.getElementById(user_choice).classList.remove("win-green")}, 1500);
 document.getElementById("winner").style.display = "block";
 setTimeout(() => {document.getElementById("winner").style.display = "none"}, 1500);
 document.getElementById('c'+comp_choice).classList.add("lose-red");
 setTimeout(() => document.getElementById('c'+comp_choice).classList.remove("lose-red"), 1500);
}

function lose(user_choice, comp_choice) {
 comp_score++;
 comp_score_span.innerHTML = comp_score;
 const small_user_word = "user".fontsize(3).sub();
 const small_comp_word = "comp".fontsize(3).sub();
 result_p.innerHTML = `${convert_choice_to_word(comp_choice)}${small_user_word} beats ${convert_choice_to_word(user_choice)}${small_comp_word}. You lose.`;
 document.getElementById(user_choice).classList.add("lose-red");
 setTimeout(() => document.getElementById(user_choice).classList.remove("lose-red"), 1500);
 document.getElementById("loser").style.display = "block";
 setTimeout(() => {document.getElementById("loser").style.display = "none"}, 1500);
 document.getElementById('c'+comp_choice).classList.add("win-green");
 setTimeout(() => document.getElementById('c'+comp_choice).classList.remove("win-green"), 1500);
}

function tie(user_choice, comp_choice) {
 const small_user_word = "user".fontsize(3).sub();
 const small_comp_word = "comp".fontsize(3).sub();
 result_p.innerHTML = `${convert_choice_to_word(user_choice)}${small_user_word} equals ${convert_choice_to_word(comp_choice)}${small_comp_word}. It's a tie.`;
 document.getElementById(user_choice).classList.add("tie-grey");
 setTimeout(function() {document.getElementById(user_choice).classList.remove("tie-grey")}, 1500);
 document.getElementById("tie").style.display = "block";
 setTimeout(() => {document.getElementById("tie").style.display = "none"}, 1500);
 document.getElementById('c'+comp_choice).classList.add("tie-grey");
 setTimeout(() => document.getElementById('c'+comp_choice).classList.remove("tie-grey"), 1500);
}

function convert_choice_to_word(letter) {
 switch(letter) {
  case 'r' : return "Rock";
  case 'p' : return "Paper";
  case 's' : return "Scissors";
 }
}

main();