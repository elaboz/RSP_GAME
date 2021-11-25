var btn_rock = document.getElementById("rock");
var btn_paper = document.getElementById("paper");
var btn_scissors = document.getElementById("scissors");
var image_me = document.querySelector(".image_me");
var image_bot = document.querySelector(".image_bot");
var players = document.querySelector(".players");
var player_me = document.getElementById("player_me");
var player_bot = document.getElementById("player_bot");
var score_small = document.getElementById("score-small");
var score_big = document.getElementById("score-big");
let three_btn = document.getElementById("three-btn");
let panel_big = document.getElementById("panel-big");
let panel_small = document.getElementById("panel-small");
let result_text = document.getElementById("result_text");
let play_again = document.getElementById("play-again");
let score_info = document.getElementById("score-info");
let score_list = document.getElementById("score-list");
let bot_count = document.getElementById("bot-count");
let side = document.getElementById("side");
let side_text = document.querySelector(".side-text");
let text_r = document.getElementById("text-r");
let text_s = document.getElementById("text-s");
let text_p = document.getElementById("text-p");
let restart = document.getElementById("restart");
let end_text = document.getElementById("score-text-big");

var score = 0;







function hide_btn() {

  
  three_btn.classList.add("visually-hidden");
  panel_small.classList.add("visually-hidden");

  // score_info.classList.add("visually-hidden");
  // score_info.classList.add("visually-hidden");
  // side.classList.add("visually-hidden");

  score_info.classList.add("slide-rotate-ver-l-bck");
  side.classList.add("slide-rotate-ver-r-bck");


  setTimeout(() => {
    score_info.classList.add("visually-hidden");
    side.classList.add("visually-hidden");
    players.classList.remove("visually-hidden");
    panel_big.classList.remove("visually-hidden");
  }, 700)

}

function reset_turn() {
  image_me.src = ``;
  image_bot.src = ``;
  result_text.innerHTML = "";
  players.classList.add("visually-hidden");

  three_btn.classList.remove("visually-hidden");
  panel_small.classList.remove("visually-hidden");
  panel_big.classList.add("visually-hidden");

  player_me.classList.remove("loser");
  player_bot.classList.remove("loser");

  player_me.classList.remove("winner");
  player_bot.classList.remove("winner");

  panel_small.classList.remove("mb-5");
  play_again.classList.add("disabled");

  result_text.classList.remove("text-light");
  result_text.classList.remove("loser-color");
  result_text.classList.remove("winner-color");
  restart.classList.add("visually-hidden");
  play_again.classList.remove("visually-hidden");




  score_info.classList.remove("slide-rotate-ver-l-bck");
  side.classList.remove("slide-rotate-ver-r-bck");

  score_info.classList.remove("visually-hidden");
  side.classList.remove("visually-hidden");
  restart.classList.remove("swing-top-fwd");
  play_again.classList.remove("swing-top-fwd");




  end_text.innerHTML = "score";
  end_text.classList.add("text-dark");
  end_text.classList.remove("margin-end-text");
  end_text.classList.remove("winner-color");
  end_text.classList.remove("loser-color");

  player_me.classList.remove("scale-up-center");
  player_bot.classList.remove("scale-up-center");

  player_me.classList.remove("scale-down-center");
  player_bot.classList.remove("scale-down-center");







}





function winner() {
  score += 1;
  score_small.innerHTML = score;
  score_big.innerHTML = score;
  result_text.classList.add("winner-color");
  result_text.innerHTML = "winner";

  player_me.classList.add("winner");
  player_me.classList.add("scale-up-center");
  player_bot.classList.add("scale-down-center");



  let turn = document.createElement("li");
  turn.classList.add("winner-color");
  turn.innerHTML = "you earned 1 point !";
  score_list.appendChild(turn);



}

function lose() {
  score -= 1;
  score_small.innerHTML = score;
  score_big.innerHTML = score;
  result_text.classList.add("loser-color");
  result_text.innerHTML = "Loser";
  player_bot.classList.add("loser");
  // player_bot.classList.add("slide-bck-center");
  player_bot.classList.add("scale-up-center");
  player_me.classList.add("scale-down-center");

  let turn = document.createElement("li");
  turn.classList.add("loser-color");
  turn.innerHTML = "you lost this turn !";

  score_list.appendChild(turn);




}

function draw() {

  result_text.classList.add("text-light");
  result_text.innerHTML = "DRAW";
  let turn = document.createElement("li");
  turn.innerHTML = "DRAW !";
  
  score_list.appendChild(turn);





}


function game_over() {

  end_text.classList.remove("text-dark");
  if (score == 3) {

    play_again.classList.add("disabled");
    play_again.classList.add("visually-hidden");
    restart.classList.remove("visually-hidden");

    setTimeout(() => {
      restart.classList.add("swing-top-fwd");
      play_again.classList.add("swing-top-fwd");
      end_text.classList.add("winner-color");

      score_big.innerHTML = "";
      end_text.classList.add("margin-end-text");

      end_text.innerHTML = " YOU WON !";


    }, 200);
    


  } else if (score == -3) {
    play_again.classList.add("disabled");
    play_again.classList.add("visually-hidden");
    restart.classList.remove("visually-hidden");

    setTimeout(() => {
      restart.classList.add("swing-top-fwd");
      play_again.classList.add("swing-top-fwd");
      end_text.classList.add("loser-color");
      score_big.innerHTML = "";
      end_text.classList.add("margin-end-text");
      end_text.innerHTML = "GAME OVER !";
    }, 200);
    

    


    
  }
}

btn_rock.addEventListener("click", function () {


  hide_btn();
  image_me.src = `images/img1.png`;

  setTimeout(() => {

    var roll_hand = Math.trunc(Math.random() * 3) + 1;

    image_bot.src = `images/img${roll_hand}.png`;

    if (roll_hand == 2) {
      winner();
      
    } else if (roll_hand == 3) {
      lose();
      

    } else if (roll_hand == 1) {
      draw();

    }

    play_again.classList.remove("disabled");

    game_over();

  }, 2000);


});

btn_scissors.addEventListener("click", function () {
  hide_btn();

  image_me.src = `images/img2.png`;

  setTimeout(() => {
    var roll_hand = Math.trunc(Math.random() * 3) + 1;

    image_bot.src = `images/img${roll_hand}.png`;
    if (roll_hand == 3) {
      winner();
    } else if (roll_hand == 1) {
      lose();
    } else if (roll_hand == 2) {
      draw();
    }
    play_again.classList.remove("disabled");

    game_over();


  }, 2000);
});

btn_paper.addEventListener("click", function () {
  hide_btn();
  panel_big.classList.remove("visually-hidden");
  panel_small.classList.add("visually-hidden");

  

  image_me.src = `images/img3.png`;

  setTimeout(() => {
    var roll_hand = Math.trunc(Math.random() * 3) + 1;
    image_bot.src = `images/img${roll_hand}.png`;
    if (roll_hand == 1) {
      winner();
    } else if (roll_hand == 2) {
      lose();
    } else if (roll_hand == 3) {
      draw();
    }
    play_again.classList.remove("disabled");

    game_over();


  }, 2000);
});






play_again.addEventListener("click", function () {

    three_btn.classList.add("mt-5");
    reset_turn();

});


restart.addEventListener("click", function () {
  
  reset_turn();
  three_btn.classList.add("mt-5");
  score = 0;
  score_small.innerHTML = score;
  score_big.innerHTML = score;
  score_list.innerHTML = "";

});