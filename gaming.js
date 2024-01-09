var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("guessbutton").addEventListener("click",function(){
    var guess=parseInt(document.getElementById("guessinput").value);
    attempts++;
    if(guess==randomNumber){
        displaymsg("Congratulations! you guessed the number in " +attempts+ "th attempts.");
        document.getElementById("guessbutton").disable=true;
    }
    else if(guess<randomNumber){
        displaymsg("Too low! Try another number");
    }
    else {
        displaymsg("Too High! Try another number");
    }
});
function displaymsg(k){
    document.getElementById("msg").textContent=k;
}