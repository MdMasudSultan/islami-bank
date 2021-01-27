
// login button event handlar

let btnclick = document.getElementById('login')
btnclick.addEventListener("click", function(){
    let fromArea = document.getElementById('bank-from')
    fromArea.style.display = "none";
    const tranArea = document.getElementById('transaction-area');
    tranArea.style.display = 'block'

})

// deposit button event hanlar

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount')

    updateSpanText("currentDeposit",depositNumber)
    
    updateSpanText("currentBalance", depositNumber)

    document.getElementById('depositAmount').value = "";

    // withdraw button event handlar

    const withdraw = document.getElementById('addWithdraw');
    withdraw.addEventListener('click', function() {
        const withdrawAmount = getInputNumber('withdrawAmount');

        updateSpanText('currentWithdraw',withdrawAmount);
        updateSpanText('currentBalance',-1*withdrawAmount);

        document.getElementById('withdrawAmount').value = "";
       
      
    })
// addEventListener fun
    function getInputNumber(id) {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber
      
    }
})
function updateSpanText(id,addNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount =   addNumber+ currentNumber;
    document.getElementById(id).innerText = totalAmount;
}