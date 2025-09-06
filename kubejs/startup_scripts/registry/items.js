StartupEvents.registry('item', event => {

    // Colored Fire Bricks
    let dye_colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green',
        'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']
    for (let color of dye_colors) {
        event.create(`oblivion:${color}_fire_brick`)
            .translationKey(`item.oblivion.${color}_fire_brick`)
            .tag('oblivion:fire_bricks')
    }


})