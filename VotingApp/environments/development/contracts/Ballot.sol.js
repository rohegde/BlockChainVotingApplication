// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"proposal","type":"uint256"}],"name":"vote","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_numProposals","type":"uint256"}],"name":"createBallot","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"winningProposal","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"voter","type":"address"}],"name":"giveRightToVote","outputs":[],"type":"function"}],
    binary: "60606040526101a2806100126000396000f3606060405260e060020a60003504630121b93f811461003c57806336dbeee814610083578063609ff1bd146100b55780639e7b8d6114610114575b005b61003a6004353373ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205460ff168061007957506001548210155b1561014d57610187565b6000805473ffffffffffffffffffffffffffffffffffffffff19163317905560043560019081555b6060908152602090f35b6100ab600080805b60015481101561018b57816006600050600083815260200190815260200160002060005054111561010c5760066000506000828152602001908152602001600020600050549150815080925082505b6001016100bd565b61003a60043573ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205460ff16156101905761019f565b60406000818120805460ff191660011790556004602090815282822085905560028152828220548583526006909152919020805490910190555b5050565b505090565b60026020526040600020600190555b5056",
    unlinked_binary: "60606040526101a2806100126000396000f3606060405260e060020a60003504630121b93f811461003c57806336dbeee814610083578063609ff1bd146100b55780639e7b8d6114610114575b005b61003a6004353373ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205460ff168061007957506001548210155b1561014d57610187565b6000805473ffffffffffffffffffffffffffffffffffffffff19163317905560043560019081555b6060908152602090f35b6100ab600080805b60015481101561018b57816006600050600083815260200190815260200160002060005054111561010c5760066000506000828152602001908152602001600020600050549150815080925082505b6001016100bd565b61003a60043573ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090205460ff16156101905761019f565b60406000818120805460ff191660011790556004602090815282822085905560028152828220548583526006909152919020805490910190555b5050565b505090565b60026020526040600020600190555b5056",
    address: "0x43be3f9e4de9fd1e14501e11f1a161ca0743acd3",
    generated_with: "2.0.9",
    contract_name: "Ballot"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Ballot error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Ballot error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Ballot error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Ballot error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Ballot = Contract;
  }

})();
