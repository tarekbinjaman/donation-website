function getValueFromInputField (id) {
    const inp = document.getElementById(id).value;
    const inputNumber = parseFloat(inp);
    return inputNumber;
}
function getValueFromTextField (id) {
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerText);
    return innerTextNumber;
}

function showSectionId(id) {
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('history-button').addEventListener('click', function(){
    showSectionId('donation-history');
})
document.getElementById('donation-main-button').addEventListener('click', function(){
    showSectionId('cards');
})