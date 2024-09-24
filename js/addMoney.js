document.getElementById('donate-button1').addEventListener('click', function() {
    const addMoneyAmount = getValueFromInputField('input-field1');
    const cardBalance = getValueFromTextField('stat-value1');
    const mainBalance = getValueFromTextField('main-value');
    if(isNaN(addMoneyAmount)) {
        alert('wrong input');
        return;
    }
    const newAmount  = cardBalance + addMoneyAmount;
    const newAmount2 = mainBalance + addMoneyAmount;
    document.getElementById('stat-value1').innerText = newAmount;
    document.getElementById('main-value').innerText = newAmount2;
    const currentDate = new Date();
    const entry = document.createElement('div')
    entry.classList.add('my-10','border-2','border-indigo-600', 'px-8', 'p-8')
    entry.innerHTML = `<h2 class = "text-3xl font-bold">${addMoneyAmount}Taka is donated for Flood at Noakhali, Bangladesh</h2>
                        <p>${currentDate}</p>`
    document.getElementById('donation-history').appendChild(entry);

})