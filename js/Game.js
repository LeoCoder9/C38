class Game {
    constructor() {

    }
    start() {
        if (gameState === 0) {


            form = new Form()
            form.display()

            player = new Player();
            player.getCount()
          
        }
            car1 = createSprite(100, 200)
        car2 = createSprite(300, 200)
        car3 = createSprite(500, 200)
        car4 = createSprite(700, 200)

        cars = [car1, car2, car3, car4]//cars[0],cars[1]
    }
    readState() {
        var statecount = database.ref('gameState');
        statecount.on("value", (data) => {
            gameState = data.val()
        })
    }
    updateState(gcount) {
        database.ref('/').update({ gameState: gcount })
    }

    play() {

    


        form.hide()
        text("Game: Started!", 200, 50)
        Player.getPlayerInfo()

        if (allPlayers !== undefined) {
            var y
            var index = 0; 
            var x = 175
            for (var plr in allPlayers) {
                x = x + 200
                y = displayHeight-allPlayers[plr].distance
                index = index + 1 
                cars[index - 1].x = x
                cars[index - 1].y = y
                if (plr === "player" + player.index) {
                   cars[index- 1].shapeColor = "Red"
                   camera.position.x = displayWidth/2
                   camera.position.y = cars[index - 1].y
                }
                else {
                    cars[index- 1].shapeColor = "grey"
                }
              
              
            }
            
        }
        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.dis = player.dis + 10
            player.update()
        }

       drawSprites()
    }

}