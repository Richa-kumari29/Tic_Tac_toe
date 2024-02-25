let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let termO=true;

const winpattern=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    termO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box is clicked");
        if(termO===true)
        {
            box.innerText="O";
            termO=false;
        }
        else
        {
            box.innerText="X";
            termO=true;
        }
        box.disabled=true;

        checkwinner();

    });
});



const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(Winner)=>{
    msg.innerText=`Congoratulation ,Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of winpattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" &&pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("YOU WIN THE GAME!",pos1val);
                showwinner(pos1val);
            }
          
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

