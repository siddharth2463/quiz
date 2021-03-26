class Contestant{
    constructor(){
        this.index=0
        this.name=null
        this.answer=0;
        

    }
    getCount(){
        var getCountref=database.ref('ContestantCount');
        getCountref.on("value",(data)=> {
         contestantCount=data.val();    
    })
    
}
update(){
    var playerIndex="players/ContestantCount"+this.index
    database.ref(playerIndex).update({
       name:this.name,
       answer:this.answer
    

    })
}
 updateCount(count){
    database.ref("/").update({
        'ContestantCount': count

    })
 }
 static getPlayerInfo(){
     var playerInfoRef=database.ref('players');
     playerInfoRef.on("value",(data)=>{
     allPlayers=data.val();
    
     })

     
 }
}