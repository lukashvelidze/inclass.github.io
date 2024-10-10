 document.getElementById("calc").addEventListener('submit',function(event){
    event.preventDefault();
    let partyType = document.getElementById("partyType").value;
    let additional = document.getElementById("Additional").value;
    let total = partyType + additional * 4;
    document.getElementById("answer").textContent = `Cost: $ + ${totalCost}`;
 });