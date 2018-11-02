class Animation {
    constructor(game) {
        this.game = game

        this.frames = []
        for (let i = 1; i < 9; i++) {
            const name = `walking${i}`
            const texture = this.game.textureByName(name)
            this.frames.push(texture)
        }

        this.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 3
    }

    static new(game) {
        return new this(game)
    }

    update() {
        this.frameCount -= 1
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }

    draw() {
        this.game.drawImage(this)
    }

    move(x) {
        this.x += x
    }
}
