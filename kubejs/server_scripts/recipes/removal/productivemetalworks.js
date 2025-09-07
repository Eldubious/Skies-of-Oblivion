// Remove recipes from Productive Metalworks
ServerEvents.recipes(event => {

    // Remove recipes for recoloring foundry blocks
    let dye_colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green',
            'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']
    for (let color of dye_colors) {
        event.remove([{id: `productivemetalworks:crafting/${color}_fire_bricks_from_dye`},
            {id: `productivemetalworks:crafting/${color}_fire_bricks_from_dye_single`},
            {id: `productivemetalworks:crafting/${color}_foundry_window_from_dye`},
            {id: `productivemetalworks:crafting/${color}_foundry_capacitor_from_dye`},
            {id: `productivemetalworks:crafting/${color}_foundry_drain_from_dye`},
            {id: `productivemetalworks:crafting/${color}_foundry_tank_from_dye`},
            {id: `productivemetalworks:crafting/${color}_foundry_controller_from_dye`}
        ])
    }

    // Remove recipes which use the Fire Brick
    event.remove({input: 'productivemetalworks:fire_brick'})
})