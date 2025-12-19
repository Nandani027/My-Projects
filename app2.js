let userScore=0;
let compscore=0;

let choice_comp;
let choice_user;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const userScorepoint=document.querySelector("#userscore");
const compscorepoint=document.querySelector("#computerscore");

const gencompchoice= ()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

};

const showWinner=(userWin,choice_user,choice_comp) =>{
    if (userWin) {
    console.log("you wins");
    msg.innerText=`You Win! ${choice_user} beats ${choice_comp}`;
    userScore++;
    userScorepoint.innerText=userScore;
    msg.style.backgroundColor="green";



    }
    else{
        console.log("you lose");
        msg.innerText=`You Lose. ${choice_comp} beats ${choice_user}`;
        compscore++;
        compscorepoint.innerText=compscore;
         msg.style.backgroundColor="red";
    }
}




const drawgame=()=> {
    console.log("game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="blue";

}



const playGame= (choice_user)=>{
    console.log("user choice=",choice_user);
    const choice_comp=gencompchoice();
    console.log("computer choice=",choice_comp);

    if(choice_user===choice_comp) {
        drawgame();
    }
    else{
        let userWin=true;
        if (choice_user==="rock"){
            //scissos,paper
            userWin =choice_comp==="paper" ? false:true;
            userScore++;
            userScorepoint.innerText=userScore;

        }
        else if (choice_user==="paper"){
            //scissos,rock
            userWin =choice_comp==="scissors" ? false:true;
            
        }
        else{
            //rock,paper
            userWin=choice_comp==="rock"? false:true;
        }
        showWinner(userWin,choice_user,choice_comp);

    }

};

choices.forEach((choice) => {
    
    choice.addEventListener("click",()=> {
        const choice_user=choice.getAttribute("id");
       
        playGame(choice_user);

    });

}
);


