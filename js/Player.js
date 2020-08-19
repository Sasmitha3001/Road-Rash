class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=null;

    }
//Updating the player count in other player's device
    getPlayerCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",(data)=>{
           playerCount= data.val();
        })
    }
//Updating the player count in the database
    updatePlayerCount(count){
        database.ref('/').update({
        playerCount:count
        })
    }
// Update the the name, distance of the player in the database
    update(){
        var playerIndex=database.ref('players')
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        }   
        )
    }
// static used to call the function only once
// We are storing the player's data in a variable called playerInfo
    static playerInfo(){
        database.ref('players').on("value",(data)=>{
            playerInfo=data.val();
        })
    }
//Updating the input given by the user regarding the number of players
    // updatePlayerNumber(){
    //     playerNumber=database.ref('playerNumber')
    //     database.ref(inputPlayer).set({
    //         number:playerNumber
    //     })
    // }


}