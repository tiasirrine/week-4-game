  console.log("sanity");

    var userGuess;
    var computerGuess;
    var diamond;
    var pinkGem;
    var blueGem;
    var purpleGem;
    var wins = 0;
    var losses = 0;


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    


    function startGame(){
        document.getElementById("total").innerHTML = "0";
        userGuess = 0;
        computerGuess = getRandomInt(19,120);
        document.getElementById("count-holder").innerHTML = ("Number to Guess: " + computerGuess);
        
        //console.log(computerGuess);
        
        diamond = getRandomInt(1, 12);
        
        $("#diamond").val(diamond);
        console.log(diamond);

        blueGem = getRandomInt(1, 12);

        $("#blueGem").val(blueGem);
        console.log(blueGem);

        pinkGem = getRandomInt(1, 12);

        $("#pinkGem").val(pinkGem);
        console.log(pinkGem);

        purpleGem = getRandomInt(1, 12);

        $("#purpleGem").val(purpleGem);
        console.log(purpleGem);
    };


    startGame();

    $(".gems").click(function(){
        console.log("crystal was clicked.");
        var gemValue = $(this).val();
        console.log(gemValue);

        userGuess = userGuess + parseInt(gemValue);

        console.log(userGuess);

        document.getElementById("total").innerHTML = userGuess;

        if (userGuess === computerGuess){
            wins++
            alert("You Win!");
            document.getElementById("wins").innerHTML = ("Wins: " + wins);
            startGame();

        } else if (userGuess > computerGuess) {
            losses++
            alert("You Loose!");
            document.getElementById("losses").innerHTML = ("Losses: " + losses);
            startGame();
        }



    });