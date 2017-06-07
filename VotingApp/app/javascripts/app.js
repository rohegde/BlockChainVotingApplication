var accounts;
var account;
var balance;
var proposal = 0;


function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function setStatus1(message) {
  var status1 = document.getElementById("status1");
  status1.innerHTML = message;
};

function setStatus2(message) {
  var status2 = document.getElementById("status2");
  status2.innerHTML = message;
};

function createBallot() {
  setStatus("Initiating Ballot");
  var i = 0;
  var bal = Ballot.deployed();
  proposal = parseInt(document.getElementById("data").value);
  //byte32[] proposalNames = document.getElementById("add-address").value;
  bal.createBallot(proposal, {from: account}).then(function(){
    setStatus("Ballot created with Contestants");
  }).catch(function(e) {
    console.log(e);
    setStatus("Error creating Ballot; see log.");
  });


};

function giveRightToVote() {
  setStatus1("Inside RTV.");
  var bal = Ballot.deployed();
  var receiver = document.getElementById("receiver").value;
  setStatus1("Initiating Vote to Right... (please wait)");
  bal.giveRightToVote(receiver, {from: account}).then(function(){
    setStatus1("Voter can Vote!");
  }).catch(function(e) {
    console.log(e);
    setStatus1("Error giving right to Vote; see log.");
  });
};

function Vote() {
  var bal = Ballot.deployed();
  setStatus2("Inside vote!");
  var receiver1 = document.getElementById("receiver1").value;
  setStatus2("Initiating Vote ... (please wait)");
  bal.vote(receiver1, {from: account}).then(function(){
    setStatus2("You voted!");
  }).catch(function(e) {
    console.log(e);
    setStatus2("Error Voting; see log.");

  });
};

function winningProposal(){
  var bal = Ballot.deployed();
  bal.winningProposal.call({from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.toNumber();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting winner; see log.");
  });
};
function displayProposal(){

  var list = "";
  //for(i=0; i<proposal; i++){
    if(proposal > 1)
      list ="vote between 0 and "+ proposal;


  //$("#proposal").append(list);
  document.getElementById("displayProposal").innerHTML = list;


  //for (i=0;i<proposalNames.length;i++)
  //{

  //        alert("true");
  //      document.getElementById("proposal").innerHTML = names.join(" ");
  //}
};



window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }


    accounts = accs;
    account = accounts[0];
    alert(account);


    //refreshBalance();
  });
}
