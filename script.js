let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

 const generatecomp =()=>
 {
    const option=["rock","paper","scissors"];
    const compc =Math.floor(Math.random()*3);
    return option[compc];
 }

choices.forEach((choice)=>
{
    choice.addEventListener("click",() =>
    {
        const cid = choice.getAttribute("id");
        playgame(cid);
    });
});


const draw = () =>
{
   msg.innerText="Game Was Draw! No One Won"
   msg.style.backgroundColor="blue"
}

const playgame = (uchoice)=>
{
   const cchoice=generatecomp();
    
   if(uchoice===cchoice)
   {
     draw();
   }
   else
   {
    let userwin=true;
    if(uchoice==="rock")
    {
        userwin= cchoice==="paper"?false:true;
    }
    else if(uchoice==="paper")
    {
        userwin= cchoice==="scissors"?false:true;
    }
    else{
        userwin= cchoice==="rock"?false:true;
    }

    showwinner(userwin,uchoice,cchoice);
   }
}

const nuserscore = document.querySelector("#userscore");
const ncompscore=document.querySelector("#compscore");
const showwinner=(uwin,uc,cc)=>
{
    if(uwin)
    {
         userscore++;
         nuserscore.innerText=userscore;
         msg.innerText=`You Win! Your ${uc} beats ${cc}`;
         msg.style.backgroundColor="green"
    }
     else
     {
      compscore++;
      ncompscore.innerText=compscore;
      msg.innerText=`You Lose! ${cc} beats  Your ${uc}`;
      msg.style.backgroundColor="red";
     }
}