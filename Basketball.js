// class Basketball {
//     cconstructor(gameName, playersInTeam) {
//         this.gameName = gameName;
//         this.playersInTeam = playersInTeam;
//         this.playerList = [];

//     }

//     wannaBePlayer(playerName, priceForPlayer) {
//         this.playerList.push({
//             name: playerName,
//             price: priceForPlayer
//         })
//     }



// }

// module.exports = Basketball;

class Basketball {
    constructor(gameName, maxPlayers) {
        this.gameName = gameName;
        this.maxPlayers = maxPlayers;
        this.playerList = [];
        this.team = [];
    }


    wannaBePlayer(playerName, price) {
        let infoAboutPlayer = {
            name: playerName,
            price: price
        }
        this.playerList.push(infoAboutPlayer)
        console.log(infoAboutPlayer);


    }
    createTeam(teamName) {
        this.team.push({
            name: teamName,
            moneyForPlayers: 0,
            players: []
        })
        console.log(` A "${teamName}" just entered a game!`);

    }





    buyPlayer(teamID, playerID) {

        this.team[teamID - 1].moneyForPlayers += this.playerList[playerID - 1].price


        console.log(`"${this.team[teamID - 1].name}" team just acquired new player ${this.playerList[playerID - 1].name} for ${this.playerList[playerID - 1].price} cash/year!`)

    }



    teamValue(teamID) {




        console.log(`"${this.team[teamID - 1].name}" team is paying ${this.team[teamID - 1].moneyForPlayers} cash / year for it's players.`)
    }

    buyPlayer{



}



}
module.exports = Basketball;