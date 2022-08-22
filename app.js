const PlayerList = []

function getPlayerList(nameList){
    if (PlayerList.length > 5) {
        alert("You can't select more than five")
        return;
    }

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

    PlayerList.push(nameObj)
    getPlayerList(PlayerList)

    if (PlayerList.length > 5) {
        return;
    }

    element.setAttribute("style", "background:red")
    element.setAttribute('class', 'disabled btn');
}


// common function 1
function getNumberValue(inputId){
    const totalCost = document.getElementById(inputId).value;
    const totalCostNumber = parseInt(totalCost);
    return totalCostNumber;
}


// common function 2
function totalCalcuate(){
    const totalCostNumber = getNumberValue('total-cost');
    const finalCost = totalCostNumber * listPlayer.length;
    return finalCost;
}

// common function 3
function inputValueById(id){
    document.getElementById(id).value = "";
}


document.getElementById("calculate-btn").addEventListener("click", function(){
    if (isNaN(totalCalcuate())) {
        alert("Enter a Number")
        return;
    }
    const finalCost = totalCalcuate()
    const playerExpense = document.getElementById("player-expense");
    playerExpense.innerText = `$${finalCost}`
})


document.getElementById("total-calculate-btn").addEventListener('click', function(){

    const managerValue = getNumberValue('manager-cost');
    const coachValue = getNumberValue('coach-cost');
    const totalCalcuateNumber = totalCalcuate();
    const totalExpense = document.getElementById("total-expense");
    const finalCostNumber = managerValue + coachValue + totalCalcuateNumber;
    if (isNaN(managerValue) || isNaN(coachValue)){
        alert("Enter a Number")
        return;
    }
    totalExpense.innerText = `$${finalCostNumber}`;
    inputValueById('manager-cost')
    inputValueById('coach-cost')
    inputValueById('total-cost')
})