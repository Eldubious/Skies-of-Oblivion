// Register shaped recipes for the Crafting Table
ServerEvents.recipes(event => {

    // Register a 2x2 compacting crafting recipe
    function compactSmall(result, ingredient) {
        event.shaped(result, ['AA', 'AA'], {A: ingredient})
    }

    // Register a 3x3 compacting crafting recipe
    function compactLarge(result, ingredient) {
        event.shaped(result, ['AAA', 'AAA', 'AAA'], {A: ingredient})
    }


    // Foundry Blocks
    let dye_colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green',
            'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']
    for (let color of dye_colors) {
        compactSmall(`4x productivemetalworks:${color}_fire_bricks`, `oblivion:${color}_fire_brick`)
        event.shaped(`productivemetalworks:${color}_foundry_controller`,
            ['AAA', 'ABA', 'AAA'], {A: `oblivion:${color}_fire_brick`, B: 'minecraft:blast_furnace'}
        )
        event.shaped(`productivemetalworks:${color}_foundry_tank`,
            ['AAA', 'ABA', 'AAA'], {A: `oblivion:${color}_fire_brick`, B: '#c:glass_blocks/colorless'}
        )
        event.shaped(`productivemetalworks:${color}_foundry_capacitor`,
            ['AAA', 'ABA', 'AAA'], {A: `oblivion:${color}_fire_brick`, B: '#c:glass_blocks/colorless'}
        )
        event.shaped(`productivemetalworks:${color}_foundry_drain`,
            ['AAA', 'A A', 'AAA'], {A: `oblivion:${color}_fire_brick`}
        )
        event.shaped(`productivemetalworks:${color}_foundry_window`,
            ['ABA'], {A: `oblivion:${color}_fire_brick`, B: '#c:glass_blocks/colorless'}
        )
    }
})