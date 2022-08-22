
const listPlayer = []

function nameList(name){

    if (listPlayer.length > 5) {
        alert("huge")
        return;
    }
 
    const tbody = document.getElementById("tbody")
    tbody.innerHTML = "";
   for(let i = 0; i < name.length; i++){
        const myname = name[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="mr-3">${i + 1}.</td>
            <td> ${myname}</td>
        `
        tbody.appendChild(tr)
   }
}

function getName(element){
    const name = element.parentNode.children[0].innerText;
   
    const nameObj = {
        playerName: name
    }
    listPlayer.push(nameObj)
    nameList(listPlayer)

    if (listPlayer.length > 5) {
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