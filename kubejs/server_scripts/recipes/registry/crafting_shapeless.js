// Register shapeless recipes for the Crafting Table
ServerEvents.recipes(event => {



    // Recipe pattern for colored clay blends
    function fireClayBlend(color, uniqueIngredient) {
        event.shapeless(`oblivion:${color}_fire_clay_blend`,
            ['2x minecraft:clay_ball', `2x minecraft:${color}_dye`, '#c:cobblestones']
        )
        event.shapeless(`oblivion:${color}_fire_clay_blend`,
            ['2x minecraft:clay_ball', `2x ${uniqueIngredient}`]
        )
    }

    // Colored Clay Blends
    let dye_colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green',
            'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']
    let stone_ingredients = ['minecraft:diorite', 'minecraft:andesite', 'minecraft:deepslate', 'minecraft:blackstone',
        'create:scoria', 'create:crimsite', 'minecraft:granite', 'create:ochrum',
        'herios_floral_expansion:chlorophyll_brick', 'create:veridium', 'create:asurine', 'architects_palette:nebulite',
        'minecraft:lapis_lazuli', 'minecraft:obsidian', 'architects_palette:oracle_jelly', 'minecraft:popped_chorus_fruit']
    for (let i = 0; i < dye_colors.length; i++) {
        fireClayBlend(dye_colors[i], stone_ingredients[i])
    }
})