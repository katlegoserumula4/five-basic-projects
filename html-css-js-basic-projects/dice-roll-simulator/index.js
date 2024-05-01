const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl =  document.getElementById("roll-history");
const historyList = [];

function rollDice(){
    const rollResults = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResults);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResults);
    updateRollHistory();
}

function updateRollHistory(){
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])}</span>`;
        rollHistoryEl.appendChild(listItem);
    }
}

function getDiceFace(rollResults){
    switch(rollResults){
        case 1:
            return "&#9856;";
            case 2:
                return "&#9857";
            case 3:
                return "&#9858";
            case 4:
                return "&#9859";
            case 5:
                return "&#9860";
            case 6:
                return "&#9861";
            default:
                return "";
    }
}

buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000);
})