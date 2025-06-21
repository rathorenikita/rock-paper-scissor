let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const drawGame = () =>{
    console.log("Game is draw");
     msg.innerText = "Game Draw play Again!";    
}
const genCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let randomIdx=Math.floor(Math.random() *3);
    return options[randomIdx];
    
}
const showWin = (userWin) =>{
        if(userWin) {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("You win !");
            msg.innerText = "You win !";
           
        }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            console.log("You lose");
             msg.innerText = "You lose";
            
        
            
        }
}


const playGame = (userChoice) =>{
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if (userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === 'paper'? false: true;
        }
        else if (userChoice === "paper"){
            userWin=compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"? false:true;
        }

        showWin(userWin);
    }
    

}
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
        
    })
})

