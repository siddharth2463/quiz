class Quiz{
    constructor(){

    }
 
getState(){
            var gameStateref=database.ref('gameState');
            gameStateref.on("value",function(data) {
             gameState=data.val();   
            })
        }
        update(state){
            database.ref("/").update({
                'gameState': state
     
            })
        }
        async start(){
            if (gameState===0){
                player=new Contestant();
                var playercountRef=await database.ref('ContestantCount').once("value")
                if(playercountRef.exists()){
                   contestantCount=playercountRef.val();
                   player.getCount();
                }
              
                q=new Question()
                q.display();
            }
        }
        play(){
            q.hide()
            background("cyan")
            text("Results",200,200)
            Contestant.getPlayerInfo()
            console.log(allPlayers);
            if(allPlayers!==undefined){
                var pos=230
                for(var plr in allPlayers){
                    var answer="2"
                    if(answer===allPlayers[plr].answer){
                        fill("green");
                    }
                    else{
                        fill("red")
                    }
                    pos=pos+30
                    text(allPlayers[plr].name+":"+allPlayers[plr].answer,250,pos);
                }
            }
        }
     }
