// Modify and create biome tags
ServerEvents.tags('worldgen/biome', event => {

    // Takes a tag name and a resource location
    function addToTag(tag, item) {
        event.add(tag, item)
    }

    // Takes a tag name and a resource location
    function removeFromTag(tag, item) {
        event.remove(tag, item)
    }

    // Control world generation
    removeFromTag('minecraft:is_overworld', 'herios_floral_expansion:giant_flower_plains')
})