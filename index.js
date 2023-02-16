// calculate btn 

document.getElementById('btn-calculate').addEventListener('click', function () {

    // expenses
    // food
    const foodField = document.getElementById('food');
    const foodFieldValue = parseFloat(foodField.value);

    // rent
    const rentField = document.getElementById('rent');
    const rentFieldValue = parseFloat(rentField.value);

    // clothes
    const clothesField = document.getElementById('clothes');
    const clothesFieldValue = parseFloat(clothesField.value);

    // calculate all the expenses
    const totalExpenses = foodFieldValue + rentFieldValue + clothesFieldValue;

    // updating total expenses
    const totalExpensesText = document.getElementById('total-expenses');
    const totalExpensesTextString = totalExpensesText.innerText;
    totalExpensesText.innerText = totalExpenses;

    //catching income value
    const incomeField = document.getElementById('income-field');
    const incomeFieldValue = parseFloat(incomeField.value);

    // updating left balance

    const balanceElement = document.getElementById('balance')
    const balanceElementValue = balanceElement.innerText;
    const newBalance = incomeFieldValue - totalExpenses;
    balanceElement.innerText = newBalance;

})

document.getElementById('btn-save').addEventListener('click', function () {

    // catching saving amount
    const savingField = document.getElementById('discount-field');
    const savingFieldValue = parseFloat(savingField.value);

    //catching income value
    const incomeField = document.getElementById('income-field');
    const incomeFieldValue = parseFloat(incomeField.value);

    //saving amount area
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountValue = parseInt(savingAmount.innerText);
    const newSavingAmountValue = savingFieldValue / 100 * incomeFieldValue;
    savingAmount.innerText = newSavingAmountValue;

    // setting remaining balance 
    const remainingBalance = document.getElementById('remaining-balance');
    const balanceElement = document.getElementById('balance')
    const newBalance = parseInt(balanceElement.innerText);
    const remainingBalanceValue = newBalance - newSavingAmountValue;
    remainingBalance.innerText = remainingBalanceValue;

    console.log(remainingBalanceValue);
})