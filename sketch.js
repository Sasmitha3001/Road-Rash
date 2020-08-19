var bikes, database,player, game, form;
var playerInfo;
var gameState=0
var playerCount=0
var playerNumber

var bike1,bike2,bike3,bike4;
var bike1Img,bike2Img,bike3Img,bike4Img;
var track;

function preload(){
   bike1Img=loadImage("Sprites/motorcycle.jpg");
   bike2Img=loadImage("Sprites/motorcycle.jpg");
   bike3Img=loadImage("Sprites/motorcycle.jpg");
   bike4Img=loadImage("Sprites/motorcycle.jpg");
   track=loadImage("Sprites/track.jpg");
}



function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();

  game= new Game();
  game.getState();
  game.start();
 


}


function draw(){
  //If player count= 1 or 2 or 3 or 4 then change the GameState to play
  if(playerNumber>=1){
    game.updateState(1);
  }


  if(playerNumber===2){
    clear();
    game.play();
  }
}
