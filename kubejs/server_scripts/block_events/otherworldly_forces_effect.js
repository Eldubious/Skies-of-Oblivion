let has_otherworldly_forces;

// Prevent placing blocks while under the otherworldly forces effect
BlockEvents.placed(event => {
    let player = event.getPlayer()

    if (player != null) {   // Block was placed by a player
        let effectsList = player.getActiveEffects()
        has_otherworldly_forces = checkPlayerHasBlockEffect(effectsList)

        if (has_otherworldly_forces) {
            event.cancel()
        }
    }
})

// Prevent breaking blocks while under the otherworldly forces effect
BlockEvents.broken(event => {
    let player = event.getPlayer()

    if (player != null) {   // Block was broken by a player
        let effectsList = player.getActiveEffects()
        has_otherworldly_forces = checkPlayerHasBlockEffect(effectsList)

        if (has_otherworldly_forces) {
            event.cancel()
        }
    }
})

// Check if the player has the unknown illness effect in the current tick
function checkPlayerHasBlockEffect(effectsList) {
    for (let effect of effectsList) {
        if (effect.toString().split(', ')[0] == 'effect.oblivion.otherworldly_forces') {
            return true
        }
    }
    return false
}