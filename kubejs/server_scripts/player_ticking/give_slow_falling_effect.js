// Give the player slow falling to give more time for loading the dimension below them
PlayerEvents.tick(event => {

    
    let player = event.getPlayer()
    let dimension = player.level.dimension.toString()
    let y_level = player.getY()

    //console.log("Y: " + y_level + " | Dimension: " + dimension)

    if (dimension == 'minecraft:overworld' && y_level <= -65) { // Prevent falling into the void no matter what
        event.server.runCommandSilent(`effect give ${player.uuid.toString()} minecraft:levitation 5 0 true`)
    }
    else if (dimension == 'minecraft:overworld' && y_level <= 194) { // Slow the player's descent
        event.server.runCommandSilent(`effect give ${player.uuid.toString()} minecraft:slow_falling 5 2 true`)
    }
})