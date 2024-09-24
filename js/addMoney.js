document.getElementById('donate-button1').addEventListener('click', function() {
    const addMoneyAmount = getValueFromInputField('input-field1');
    const cardBalance = getValueFromTextField('stat-value1');
    const mainBalance = getValueFromTextField('main-value');
    if(addMoneyAmount <= 0 || isNaN(addMoneyAmount)) {
        alert('wrong input');
        return;
    }
    else {
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
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
    document.getElementById('my_modal_1').classList.remove('hidden')
    }

})
document.getElementById('donate-button2').addEventListener('click', function() {
    const addMoneyAmount = getValueFromInputField('input-field2');
    const cardBalance = getValueFromTextField('stat-value2');
    const mainBalance = getValueFromTextField('main-value');
    if(addMoneyAmount <= 0 || isNaN(addMoneyAmount)) {
        alert('wrong input');
        return;
    }
    else {
            const newAmount  = cardBalance + addMoneyAmount;
    const newAmount2 = mainBalance + addMoneyAmount;
    document.getElementById('stat-value2').innerText = newAmount;
    document.getElementById('main-value').innerText = newAmount2;
    const currentDate = new Date();
    const entry = document.createElement('div')
    entry.classList.add('my-10','border-2','border-indigo-600', 'px-8', 'p-8')
    entry.innerHTML = `<h2 class = "text-3xl font-bold">${addMoneyAmount}Donate for Flood Relief in Feni,Bangladesh</h2>
                        <p>${currentDate}</p>`
    document.getElementById('donation-history').appendChild(entry);
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
    document.getElementById('my_modal_1').classList.remove('hidden')

    }


})
document.getElementById('donate-button3').addEventListener('click', function() {
    const addMoneyAmount = getValueFromInputField('input-field3');
    const cardBalance = getValueFromTextField('stat-value3');
    const mainBalance = getValueFromTextField('main-value');
    if(addMoneyAmount <= 0 || isNaN(addMoneyAmount)) {
        alert('wrong input');
        return;
    }
    else {
            const newAmount  = cardBalance + addMoneyAmount;
    const newAmount2 = mainBalance + addMoneyAmount;
    document.getElementById('stat-value3').innerText = newAmount;
    document.getElementById('main-value').innerText = newAmount2;
    const currentDate = new Date();
    const entry = document.createElement('div')
    entry.classList.add('my-10','border-2','border-indigo-600', 'px-8', 'p-8')
    entry.innerHTML = `<h2 class = "text-3xl font-bold">${addMoneyAmount}Aid for Injured in the Quota Movement</h2>
                        <p>${currentDate}</p>`
    document.getElementById('donation-history').appendChild(entry);
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
    document.getElementById('my_modal_1').classList.remove('hidden')

    }


})