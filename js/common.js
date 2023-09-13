function getTextElementValueById(elementId) {
    const costSectionElement = document.getElementById(elementId);
    const currentCostString = costSectionElement.innerText;
    const currentCost = parseInt(currentCostString);
    return currentCost;
}

function setTextElementValueById(elementId, value) {
    const costSectionElement = document.getElementById(elementId);
    costSectionElement.innerText = value;
}

function calculateSubTotal() {
    // calculate total
    const currentPhonePrice = getTextElementValueById('phone-total');
    const currentCasePrice = getTextElementValueById('case-total');
    const currentSubTotalPrice = currentPhonePrice + currentCasePrice;

    setTextElementValueById('sub-total', currentSubTotalPrice);

    // calculate tax 
    const taxAmountString = (currentSubTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // calculate final total
    const finalTotal = currentSubTotalPrice + taxAmount;
    setTextElementValueById('final-total', finalTotal);

}