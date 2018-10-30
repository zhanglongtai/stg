class Player extends GameImage {
    constructor(game) {
        super(game, 'player')

        this.setUp()
    }

    setUp() {
        this.speed = 10
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    fire() {
        const x = this.x + this.width / 2
        const y = this.y
    }
}
