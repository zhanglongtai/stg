class Animation {
    constructor(game) {
        this.game = game

        this.animations = {
            idle: [],
            run: [],
        }

        for (let i = 1; i < 7; i++) {
            const name = `run${i}`
            const texture = this.game.textureByName(name)
            this.animations['run'].push(texture)
        }

        for (let i = 1; i < 4; i++) {
            const name = `idle${i}`
            const texture = this.game.textureByName(name)
            this.animations['idle'].push(texture)
        }

        this.animationState = 'run'
        this.texture = this.frames()[0]
        this.width = this.texture.width
        this.frameIndex = 0
        this.frameCount = 3

        this.flipX = false
    }

    static new(game) {
        return new this(game)
    }

    frames() {
        return this.animations[this.animationState]
    }

    update() {
        this.frameCount -= 1
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }

    draw() {
        if (this.flipX) {
            const context = this.game.context

            context.save()

            const deltaX = this.x + this.width/2
            context.translate(deltaX, 0)
            context.scale(-1, 1)
            context.translate(-deltaX, 0)

            context.drawImage(this.texture, this.x, this.y)

            context.restore()
        } else {
            this.game.drawImage(this)
        }
    }

    move(x, keyState) {
        if (x < 0) {
            this.flipX = true
        } else  {
            this.flipX = false
        }

        this.x += x
        const animationState = {
            keydown: 'run',
            keyup: 'idle',
        }

        const state = animationState[keyState]

        this.changeAnimation(state)
    }

    changeAnimation(state) {
        this.animationState = state
    }
}
