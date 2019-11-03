/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, dice;

scores= [0,0];
roundScore = 0;
activePlayer = 1;

//Hide the Dice on Load
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//When uou click roll dive -
document.querySelector('.btn-roll').addEventListener('click', function(){

    //Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //Display the Res
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display ='block';
    diceDOM.src = 'dice-' + dice + '.png';

    //Update the score round if not a 1

    if ( dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent= roundScore;
    } else { 
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        //Reset Score
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //Toggle Active Player CSS
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    } 
});

