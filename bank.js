let btnclick = document.getElementById('login')
btnclick.addEventListener("click", function(){
    let fromArea = document.getElementById('bank-from')
    fromArea.style.display = "none";
    const tranArea = document.getElementById('transaction-area');
    tranArea.style.display = 'block'

})