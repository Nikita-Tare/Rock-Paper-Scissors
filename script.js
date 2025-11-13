let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You Win.Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compscorepara.innerText= compScore;
        msg.innerText=`You Lose.${compChoice} Beats Your${userChoice}`;
        msg.style.backgroundColor="red";


    }
};

const DrawGame=()=>{
    
    msg.innerText="Game was Draw play again";
    msg.style.backgroundColor="#081b31";


};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

if (userChoice === compChoice){
    DrawGame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userwin=compChoice==="scissors"?false: true;
    }
    else{
        userwin=compChoice==="rock"?false:true;
    }
    showwinner(userwin,userChoice,compChoice);
}
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})