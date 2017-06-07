contract Ballot {
address chairperson;
uint numProposals;
mapping(address => uint) voterWeight;
mapping(address => bool) voted;
mapping(address => uint) votes;
mapping(address => address) delegations;
mapping(uint => uint) voteCounts;

    // Create a new ballot with $(_numProposals) returns(bool sufficient) different proposals.
    function createBallot(uint _numProposals) returns(bool sufficient){
        address sender = msg.sender ;
        chairperson = sender;
        numProposals = _numProposals;
        return true;
    }

    // Give $(voter) the right to vote on this ballot.
    // May only be called by $(chairperson).
    function giveRightToVote(address voter) {
        if (/*msg.sender != chairperson ||*/ voted[voter]) return;
        voterWeight[voter] = 1;
    }



    // Give a single vote to proposal $(proposal).
    function vote(uint proposal) {
        address sender = msg.sender;
        if (voted[sender] || proposal >= numProposals) return;
        voted[sender] = true;
        votes[sender] = proposal;
        voteCounts[proposal] += voterWeight[sender];
    }


    function winningProposal() constant returns (uint winningProposal) {
        uint winningVoteCount = 0;
        uint proposal1 = 0;
        while (proposal1 < numProposals) {
            if (voteCounts[proposal1] > winningVoteCount) {
                winningVoteCount = voteCounts[proposal1];
                winningProposal = proposal1;
            }
            ++proposal1;

        }
    }


}
