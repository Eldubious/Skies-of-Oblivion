// Remove recipes from Farmer's Delight
ServerEvents.recipes(event => {

    // This recipe throws a KubeJS error
    event.remove({id: 'farmersdelight:integration/silentgear/cutting/netherwood'})
})