const PlayerList = []

function getPlayerList(nameList){
    const tbody = document.getElementById("tbody")
    tbody.innerHTML = "";
    for (let i = 0; i < nameList.length; i++){
        const name = nameList[i].playerName;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${i + 1}.</td>
                <td>${name}</td>
            `
            tbody.appendChild(tr)
    }
}

function getName(element){
    const name = element.parentNode.children[0].innerText;
    const nameObj = {
        playerName: name
    }

    if (PlayerList.length >= 5) {
        alert("you can't select more than five");
        return;
    }

    PlayerList.push(nameObj)
    getPlayerList(PlayerList)

    element.setAttribute("style", "background:red")
    element.setAttribute('class', 'disabled btn');
}

// common function 1
function getInputValue(inputId) {
    const totalCost = document.getElementById(inputId).value;
    const totalCostNumber = parseInt(totalCost);
    return totalCostNumber;
}


// common function 2
function perPlayerCostCalculete() {
    const perPlayerCost = getInputValue('player-cost');
    const totalPerPalyerCost = perPlayerCost * PlayerList.length;
    return totalPerPalyerCost;
}



// common function 3
function inputValueById(id){
    document.getElementById(id).value = "";
}


document.getElementById("calculate-btn").addEventListener("click", function(){
    if (isNaN(perPlayerCostCalculete())) {
        alert("Enter a Number")
        return;
    }
    const finalCost = perPlayerCostCalculete()
    const playerExpense = document.getElementById("player-expense");
    playerExpense.innerText = `$${finalCost}`
})


document.getElementById("total-calculate-btn").addEventListener('click', function(){

    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    const totalPerPlayerCostCalculate = perPlayerCostCalculete();
    const totalExpense = document.getElementById("total-expense");
    const getFinalCost = managerCost + coachCost + totalPerPlayerCostCalculate;
    if (isNaN(managerCost) || isNaN(coachCost)){
        alert("Enter a Number")
        return;
    }
    totalExpense.innerText = `$${getFinalCost}`;
    inputValueById('manager-cost')
    inputValueById('coach-cost')
    inputValueById('player-cost')
})