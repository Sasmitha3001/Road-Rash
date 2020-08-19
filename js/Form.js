class Form{
    constructor(){
        this.input=createInput("Name");
        this.play=createButton("Play");
        this.title=createElement("h1");
        this.reset=createButton("Reset");
        this.inputPlayers=createInput("Number of players");
        this.greetings=createElement("h1");
    }
    hide(){
        this.input.hide();
        this.play.hide();
        this.title.hide();
        this.inputPlayers.hide();
        this.greetings.hide();
        
    }

    display(){
// Displaying title
        this.title.html("ROAD RASH");

//Giving positions to different elements
        this.title.position(displayWidth/2,0);
        this.inputPlayers.position(displayWidth/2-40,displayHeight/2-80);
        this.input.position(displayWidth/2-40,displayHeight/2-120)
        this.play.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);

//If play button is pressed then carry out the following steps
        this.play.mousePressed(()=>{
        //hide the following buttons
            this.input.hide();
            this.play.hide();
            this.title.hide();
            this.inputPlayers.hide();

        //Update the player count and store the information in player.index  
        //Also update it in the database
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            playerNumber=this.inputPlayers.value();
            player.update();
            player.updatePlayerCount(playerCount);

        //Display this text
            this.greetings.html("READY SET GO!!");
            this.greetings.position(displayWidth/2,displayHeight/4);

        })
    // When reset button is clicked change GameState and Player count to 0 and remove players
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updatePlayerCount(0);
          
        })

        }

    

    }

