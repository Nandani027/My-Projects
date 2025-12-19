//variables
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let message=document.getElementById("msg");


//condition for game starting
let turn0=true;

//constants
//winnning conditions
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//condition to reset game
const resetGame = () => {
    turn0=true;
    enableBoxes();
    message.textContent="";
};

//condition to check winner
const checkWinner = () => {
for (let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
   
   if(pos1!="" && pos2!="" && pos3!="" && pos1===pos2 && pos2==pos3)  {
   
        console.log ("winner");
        disableBoxes();
        message.textContent=`🎉Congratulation, ${pos1} wins!🎊`;   
        return;
        
    }
}

   
    let isDraw = Array.from(boxes).every(box => box.innerText !== "");

    if(isDraw){
        
        msg.innerText = "It's a draw!";
        disableBoxes();
    }
    
   


}; 

//function
//event of playing game
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
    console.log("box was clicked");
    if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
       
});

});

//event of reseting game
reset.addEventListener("click",resetGame);




    




