class GameImage {
    constructor(game, name) {
        this.texture = game.textureByName(name)

        this.x = 0
        this.y = 0
        this.width = this.texture.width
        this.height = this.texture.height
    }

    static new(game, name) {
        const i = new this(game, name)
        return i
    }

    draw() {}

    update() {}
}

class Player extends GameImage {
    constructor(game, name) {
        super(game, name)
    }
}
