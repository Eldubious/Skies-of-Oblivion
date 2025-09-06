let had_sickness_prev_tick = false; let has_sickness_currently = false;

PlayerEvents.tick(event => {
    let player = event.getPlayer()
    let effectsList = player.getActiveEffects()
    has_sickness_currently = checkPlayerHasSickness(effectsList)

    if (has_sickness_currently && !had_sickness_prev_tick) {
        event.server.runCommand(
            `attribute ${player.uuid.toString()} apothic_attributes:healing_received modifier add unknown_illness -1 add_value`
        )
        had_sickness_prev_tick = true
    }

    else if (!has_sickness_currently && had_sickness_prev_tick) {
        event.server.runCommand(
            `attribute ${player.uuid.toString()} apothic_attributes:healing_received modifier remove unknown_illness`
        )
        had_sickness_prev_tick = false
    }
})

// Check if the player has the unknown illness effect in the current tick
function checkPlayerHasSickness(effectsList) {
    for (let effect of effectsList) {
        if (effect.toString().split(', ')[0] == 'effect.oblivion.unknown_illness') {
            return true
        }
    }
    return false
}