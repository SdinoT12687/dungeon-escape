let Ricky = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . 4 4 f 4 4 f 4 . . . . . 
    . . . f 4 4 4 4 4 4 4 . . 2 2 2 
    . . . f f f f f f f f . . 2 . . 
    . . . f f f f f f f f f f 4 . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . 4 f f f f f . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . e e e . e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Jude = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . e e 4 4 4 4 4 4 . . . . . 
    . . . e e 4 4 4 4 4 . . . . . . 
    . . . e e 4 4 4 4 4 . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . e e . . . . . . . . . . . 
    . . . . e . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
