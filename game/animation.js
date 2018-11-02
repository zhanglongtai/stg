class Animation {
    constructor(game) {
        this.game = game

        this.frames = []
        for (let i = 1; i < 9; i++) {
            const name = `walking${i}`
            const texture = this.game.textureByName(name)
            this.frames.push(texture)
        }
    }
}
