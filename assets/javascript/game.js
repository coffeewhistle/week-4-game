$(document).ready(function() {

    var randomNumber ;
    var wins = 0;
    var losses = 0;
    var playerNum = 0;
    var crystal1 ;
    var crystal2 ;
    var crystal3 ;
    var crystal4 ;
    var crystal1First = true;
    var crystal2First = true;
    var crystal3First = true;
    var crystal4First = true;
    
    $("#crystal-1").on("click", crystal1Click);
    $("#crystal-2").on("click", crystal2Click);
    $("#crystal-3").on("click", crystal3Click);
    $("#crystal-4").on("click", crystal4Click);

    numGen();

    function crystal1Click() {
        if (crystal1First === true) {
            crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            crystal1First = false;
            playerNum += crystal1;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        } else {
            playerNum += crystal1;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        }
    }

    function crystal2Click() {
        if (crystal2First === true) {
            crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            crystal2First = false;
            playerNum += crystal2;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        } else {
            playerNum += crystal2;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        }
    }

    function crystal3Click() {
        if (crystal3First === true) {
            crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            crystal3First = false;
            playerNum += crystal3;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        } else {
            playerNum += crystal3;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        }
    }

    function crystal4Click() {
        if (crystal4First === true) {
            crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            crystal4First = false;
            playerNum += crystal4;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        } else {
            playerNum += crystal4;
            console.log(playerNum);
            printPlayerNum();
            win();
            lose();
        }
    }

    function numGen() {
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#random-number").html("<h1>" + randomNumber + "</h1>");
    }

    function printPlayerNum () {
        $("#player-number").html("<h1>" + playerNum + "</h1>");
    }

    function reset () {
        $("#random-number").html("<h1>0</h1>");
        $("#player-number").html("<h1>0</h1>");
        playerNum = 0;
    }

    function win() {
        if (playerNum == randomNumber) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            reset();
            numGen();
        }
    }

    function lose() {
        if (playerNum > randomNumber) {
            alert("You lose!");
            losses++;
            $("#losses").text(losses);
            reset();
            numGen();
        }
    }

});