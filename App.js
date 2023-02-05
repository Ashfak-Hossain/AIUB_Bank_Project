//login button event handler

const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//deposit button event handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", () => {
  const depositNumber = getInputNumber("depositAmount");
  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

//windraw button event handler

const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", () => {
  const withdrawNumber = getInputNumber("withdrawAmount");
});

function getInputNumber(id) {
  const withdrawAmount = document.getElementById(id).value;
  const withdrawNumber = parseFloat(withdrawAmount);
  return withdrawNumber;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
