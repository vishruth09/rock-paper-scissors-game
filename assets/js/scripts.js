let userscore = 0;
let compscore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const u_score = document.querySelector("#user-score");
const c_score = document.querySelector("#comp-score");

const getcompchoice = () =>{
    const options = ["rock","paper","scissor"];
    const idx= Math.floor(Math.random()*3);
    return options[idx];
};

const drawchoice = () =>{
    console.log("game was draw.");
    msg.innerText = `Game was draw.Play Again`;
    msg.style.backgroundColor = "orange";
};

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        u_score.innerText = userscore;
        console.log("You winner");
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        c_score.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lose. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) =>{
    console.log("user choice is :",userchoice);
    //generate computer choice
    const compchoice = getcompchoice();
    console.log("comp choice is :",compchoice);

    if(userchoice === compchoice){
        //draw
        drawchoice();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper , scissor
            userwin = compchoice === "paper" ? false: true;
        }
        else if(userchoice === "paper"){
              //rock , scissor
              userwin = compchoice === "scissor"? false: true;
        }
        else{
            //paper ,scissor
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) =>{
 
    choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);

    });
});