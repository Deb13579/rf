class Player {
    constructor(){
      this.distance = 0;
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
      
    }
   static getPlayersInfo(){
       var playerInfoRef = database.ref("players")
       playerInfoRef.on("name",(data)=>{
         allPlayers = data.val()
       })
    }
  }
