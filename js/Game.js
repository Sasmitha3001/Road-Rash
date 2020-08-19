class Game{
    constructor(){

    }

//To update the state in the other player's device
    getState(){
        var getstateInfo=database.ref('gameState')
        getstateInfo.on("value",(data)=>{
            gameState=data.val();
        })
        }
//To update the gamestate in the database
        updateState(state){
            database.ref('/').update({
                gameState:state
            })
         }
    async start(){
        if(gameState===0){
            var playerCountRef= await database.ref('playerCount').once("value");
            
            player=new Player;

            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
           

            form= new Form;
            form.display();
        }

        
            bike1=createSprite(100,200);
            bike1.addImage("bike1",bike1Img);

            bike2=createSprite(300,200);
            bike2.addImage("bike2",bike2Img);

            bike3=createSprite(500,200);
            bike3.addImage("bike3",bike3Img);

            bike4=createSprite(700,200);
            bike4.addImage("bike4",bike4Img);


        

        bikes=[bike1,bike2,bike3,bike4];
    }

    play(){
        form.hide();

        Player.playerInfo();

        if(playerInfo!==undefined){
            background(rgb(193,135,105));
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            var index=0;

            var x=175;
            var y;

            for(var i in playerInfo){
                index=index+1;

                x=x+200;

                y= displayHeight-playerInfo[i].distance;

                bikes[index-1].x=x
                bikes[index-1].y=y

                if(player.index===index){
                    stroke(10);
                    ellipse(x,y,80,80);
                    bikes[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=car[index-1].y;
                }
            }
        }

        if(player.index!==null && keyIsDown(UP_ARROW)){
            player.distance=player.distance+10;

            if(playerCount===1){
                bike2.speed=random(5,20);
                bike3.speed=random(5,20);
                bike4.speed=random(5,20);
    
            }
    
            if(playerCount===2){
                bike3.speed=random(5,20);
                bike4.speed=random(5,20);
            }
    
            if(playerCount===3){
                bike4.speed=random(5,20);
            }
            player.update();

        }
       

        drawSprites();
    }


    

    

}
