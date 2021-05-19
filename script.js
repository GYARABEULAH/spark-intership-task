let GyaraAccountBalance = parseInt(document.getElementById("GyaraAccountBalance").innerText);

function transfer(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 8000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var GyaraAccountBalance = parseInt(document.getElementById("GyaraAccountBalance").innerText) - enterAmount
      document.getElementById("GyaraAccountBalance").innerText = GyaraAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@gmail.com.`)

      // Purchase
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

