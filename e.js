let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg");
const userscore1=document.querySelector("#userscore");
const compscore1=document.querySelector("#compscore");


const gencompchoice=()=>{

    const options=["rock","paper","scissor"];

    const randindx=Math.floor(Math.random()*3);
    return(options[randindx]);
}

const drawgame=()=>{
    console.log("GAME WAS DRAW");
    msg.innerText="GAME WAS DRAW";
};

const showwin=(userwin)=>{
    if(userwin===true){
        userscore++;
        userscore1.innerText=userscore;
        console.log("YOU WIN");
        msg.innerText="YOU WIN";
        msg.style.backgroundColor="green";

    }
    else{
        compscore++;
        compscore1.innerText=compscore;
        console.log("YOU LOSE");
        
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
    }

};

const playgame=(userchoice)=>{
    console.log("userchoice",userchoice);
    

    const compchoice=gencompchoice();
    console.log("compchoice",compchoice);

    if(userchoice===compchoice){
        drawgame();

    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;

        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwin(userwin);
    }
    

};

choices.forEach((choice) => {
    console.log(choice);
    const userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        console.log("clicked",userchoice);
        playgame(userchoice);
    });
    
    
});