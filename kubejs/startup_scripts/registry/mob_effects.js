// Register mob effects to the game
StartupEvents.registry('mob_effect', event => {

    event.create('oblivion:unknown_illness')
        .category('harmful')
        .color('#746894')
        
    event.create('oblivion:otherworldly_forces')
        .category('harmful')
        .color('#81CAE9')  
})