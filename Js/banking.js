document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const inputField = document.getElementById("deposit-input");
    const newDepositAmountText = inputField.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // Update Account balance

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input

    inputField.value = "";
  });

// handle withdraw handler

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const PreviousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(PreviousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // withdraw korar por updated balance
    const BalanceTotal = document.getElementById("balance-total");
    const previousBalanceText = BalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newUpdateBalance = previousBalanceTotal - newWithdrawAmount;
    BalanceTotal.innerText = newUpdateBalance;
    // clear the withdraw  input

    withdrawInput.value = "";
  });
