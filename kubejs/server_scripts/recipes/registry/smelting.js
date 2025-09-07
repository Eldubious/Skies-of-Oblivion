// Register recipes related to smelting
ServerEvents.recipes(event => {

    // Register recipes for all the color foundry bricks
    let dye_colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green',
            'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']
    for (let color of dye_colors) {
        // Generic smelting recipe
        event.smelting(`oblivion:${color}_fire_brick`, `oblivion:${color}_fire_clay_blend`,
            0.3, 200
        )
        // Kiln recipe
        event.custom({
            type: 'clayworks:baking',
            category: 'misc',
            cookingtime: 100,
            experience: 0.3,
            ingredient: {
                item: `oblivion:${color}_fire_clay_blend`
            },
            result: {
                count: 1,
                id: `oblivion:${color}_fire_brick`
            }
        })
    }
})